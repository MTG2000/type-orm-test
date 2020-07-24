import { NextFunction, Request, Response } from "express";
import UsersRepository from "../repositories/users.repository";
import Responses from "../helpers/response";
import Errors from "../helpers/error";

export class UserController {
  async all(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.all();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.one(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    if (request.body.firstName.length < 3 || request.body.lastName.length < 3)
      throw Errors.BadRequest("Name is Too Short");
    await UsersRepository.save(request.body);
    return new Responses.Success("User Created Successfully");
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    await UsersRepository.remove(request.params.id);
    return new Responses.Success("User Deleted Successfully");
  }
  async findByName(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.getByName(request.query.name);
  }
}
