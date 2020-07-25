import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Contact } from "./Contact";
import { User } from "./User";

@Entity()
export class Message {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  content: string;

  @ManyToOne((type) => Contact, (contact) => contact.messages)
  contact: Contact;

  @ManyToOne((type) => User, (user) => user.messages)
  user: User;

  @CreateDateColumn({ name: "created_at" }) "created_at": Date;
}
