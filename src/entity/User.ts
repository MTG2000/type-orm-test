import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
