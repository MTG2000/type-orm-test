import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Group } from "./Group";
import { Message } from "./Message";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne((type) => User)
  user1: User;

  @ManyToOne((type) => User)
  user2: User;

  @ManyToOne((type) => Group)
  group: Group;

  @OneToMany((type) => Message, (msg) => msg.contact)
  messages: Message[];
}
