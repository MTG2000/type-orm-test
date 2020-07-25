import { getRepository, Like } from "typeorm";
import BaseRepository from "./repository";
import { User } from "../entity/User";

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async find(username): Promise<User> {
    return (await this.repository
      .createQueryBuilder("user")
      .where("name=:name", { name: username })
      .addSelect("user.password")
      .getOne()) as User;
  }

  async findByName(username): Promise<User[]> {
    return (await this.repository
      .createQueryBuilder("user")
      .where("name like :name", { name: "%" + username + "%" })
      .getMany()) as User[];
  }
}

export default new UserRepository();
