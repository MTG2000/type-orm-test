import { getRepository, Like } from "typeorm";
import BaseRepository from "./repository";
import { Contact } from "../entity/Contact";

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
