import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Message } from "./Message";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({
    select: false,
  })
  password: string;

  @Column({
    nullable: true,
  })
  age: number;

  @OneToMany((type) => Message, (msg) => msg.contact)
  messages: Message[];
}
