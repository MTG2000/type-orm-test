import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Group {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  name: string;
}
