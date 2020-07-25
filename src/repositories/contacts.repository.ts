import { getRepository, Like } from "typeorm";
import BaseRepository from "./repository";
import { Contact } from "../entity/Contact";
import { Message } from "../entity/Message";

class ContactsRepositroy extends BaseRepository {
  constructor() {
    super(Contact);
  }

  async allContacts(userId) {
    return await this.repository
      .createQueryBuilder("contact")
      .leftJoinAndSelect("contact.user1", "user1")
      .leftJoinAndSelect("contact.user2", "user2")
      .leftJoinAndSelect("contact.group", "group")
      .where("contact.user1 = :userId", { userId })
      .orWhere("contact.user2 = :userId", { userId })

      .getMany();
  }

  async getUserGroups(userId) {
    return await this.repository
      .createQueryBuilder("contact")
      .where("contact.group is not null")
      .andWhere("contact.user1 = :userId", { userId })
      .getMany();
  }

  async getLatestMessage(contactId) {
    return (
      (await getRepository(Message)
        .createQueryBuilder("message")
        .where("message.contact = :contactId", { contactId })
        .orderBy("message.created_at", "DESC")
        .getOne()) || ""
    );
  }

  async contactExist(userId1, userId2) {
    return (
      (await this.repository
        .createQueryBuilder("contact")
        .where("contact.user1 = :userId1 ", { userId1 })
        .andWhere("contact.user2 = :userId2 ", { userId2 })
        .orWhere("contact.user1 = :userId1 ", { userId2 })
        .andWhere("contact.user2 = :userId2 ", { userId1 })
        .getCount()) > 0
    );
  }
}

export default new ContactsRepositroy();
