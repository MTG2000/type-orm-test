import { getRepository, Like } from "typeorm";
import BaseRepository from "./repository";
import { User } from "../entity/User";

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async getByName(name) {
    return await this.repository
      .createQueryBuilder("user")
      .where("user.firstName like :name ", {
        name: "%" + name + "%",
      })
      .orWhere("user.lastName like :name ", {
        name: "%" + name + "%",
      })
      .getMany();
  }
}

export default new UserRepository();
