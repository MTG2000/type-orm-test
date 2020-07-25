import { NextFunction, Request, Response } from "express";
import MessagesRepository from "../repositories/messages.repository";
import Responses from "../helpers/response";
import Errors from "../helpers/error";
import messagesRepository from "../repositories/messages.repository";

export class MessagesController {
  async all(request: Request, response: Response, next: NextFunction) {
    return await messagesRepository.getContactMessages(
      request.query.id,
      request.query.pageSize,
      request.query.pageNumber
    );
    // return await MessagesRepository.allContacts(request.user.id);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return await MessagesRepository.one(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const user = request.user;
    const { contactId, content } = request.body;
    await MessagesRepository.save({
      content: content,
      contact: contactId,
      user: user.id,
    });
    return new Responses.Success("Message Sent Successfully");
  }
}
