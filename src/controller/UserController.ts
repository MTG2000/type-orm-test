import { NextFunction, Request, Response } from "express";
import UsersRepository from "../repositories/users.repository";

export class UserController {
  async all(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.all();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.one(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.remove(request.params.id);
  }
  async findByName(request: Request, response: Response, next: NextFunction) {
    return await UsersRepository.getByName(request.query.name);
  }
}
