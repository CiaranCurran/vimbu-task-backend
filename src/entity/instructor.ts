import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import { v4 as uuid4 } from "uuid";

@Entity()
export class Instructor extends BaseEntity {
  @PrimaryColumn("uuid") id: string;

  @Column("varchar", { length: 255 }) firstName: string;

  @Column("varchar", { length: 255 }) lastName: string;

  @BeforeInsert()
  addId() {
    this.id = uuid4();
  }
}
