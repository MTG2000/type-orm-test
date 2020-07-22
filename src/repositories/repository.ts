import { getRepository } from "typeorm";

export default class BaseRepository {
  private entity;

  constructor(_entity) {
    this.entity = _entity;
  }

  get repository() {
    return getRepository(this.entity);
  }

  async all() {
    return await this.repository.find();
  }

  async one(id) {
    return await this.repository.findOne(id);
  }

  async save(data) {
    return await this.repository.save(data);
  }

  async remove(id) {
    let itemToRemove = await this.repository.findOne(id);
    await this.repository.remove(itemToRemove);
  }
}
