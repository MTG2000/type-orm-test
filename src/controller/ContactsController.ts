import { NextFunction, Request, Response } from "express";
import ContactsRepository from "../repositories/contacts.repository";
import Responses from "../helpers/response";
import Errors from "../helpers/error";
import AuthService from "../services/auth.service";
import * as argon from "argon2";
import { User } from "../entity/User";

export class ContactsController {
  async all(request: Request, response: Response, next: NextFunction) {
    return await ContactsRepository.allContacts(request.user.id);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return await ContactsRepository.one(request.params.id);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    await ContactsRepository.remove(request.params.id);
    return new Responses.Success("Contact Deleted Successfully");
  }

  async createContact(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    //check if contact already exist
    const user = request.user;
    const { userId } = request.body;

    const contactExist = await ContactsRepository.contactExist(user.id, userId);

    if (contactExist) throw Errors.BadRequest("Contact Already Exist");
    if (userId.trim().length < 1)
      throw Errors.BadRequest("No User Id Provided");

    const result = await ContactsRepository.save({
      user1: user.id,
      user2: userId,
    });

    response.send(result);
  }
}
