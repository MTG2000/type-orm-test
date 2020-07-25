import { getRepository, Like } from "typeorm";
import BaseRepository from "./repository";
import { Message } from "../entity/Message";

class MessagesRepository extends BaseRepository {
  constructor() {
    super(Message);
  }

  async getContactMessages(
    contactId: string,
    pageSize = 20,
    pageNumber = 1
  ): Promise<any[]> {
    return await this.repository
      .createQueryBuilder("message")
      .innerJoinAndSelect("message.user", "user")
      .where("message.contact=:contactId", { contactId })
      .take(pageSize)
      .skip((pageNumber - 1) * pageSize)
      .orderBy("message.created_at", "DESC")
      .getMany();
  }

  async save(data) {
    const { id } = await super.save(data);
    return await this.repository.findOne({
      where: { id },
      relations: ["user", "contact"],
    });
  }
}

export default new MessagesRepository();
