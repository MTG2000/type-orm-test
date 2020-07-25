import { NextFunction, Request, Response } from "express";
import UsersRepository from "../repositories/users.repository";
import Responses from "../helpers/response";
import Errors from "../helpers/error";
import AuthService from "../services/auth.service";
import * as argon from "argon2";
import { User } from "../entity/User";

export class UserController {
  async all(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.all();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.one(request.params.id);
  }

  async register(request: Request, response: Response, next: NextFunction) {
    const { username, password } = request.body;
    if (username.length < 3 || password.length < 3)
      throw Errors.BadRequest("Name/Password is Too Short");

    const passwordHash = await argon.hash(password);

    await UsersRepository.save({
      name: username,
      password: passwordHash,
    });
    return new Responses.Success("User Created Successfully");
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    await UsersRepository.remove(request.params.id);
    return new Responses.Success("User Deleted Successfully");
  }
  async findByName(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.getByName(request.query.name);
  }

  async login(request: Request, response: Response, next: NextFunction) {
    // Validate Credentials
    const { username, password } = request.body;
    const user: User = await UsersRepository.find(username);
    const passwordValid = await argon.verify(user.password, password);
    if (!user || !passwordValid)
      throw Errors.BadRequest("Name/Password is Incorrect");

    const token = await AuthService.generateAccessToken({
      id: user.id,
      user: user.name,
    });

    response.cookie("authToken", token, {
      secure: false, // set to true if your using https
    });
    return {
      id: user.id,
      name: user.name,
    };
  }
}
