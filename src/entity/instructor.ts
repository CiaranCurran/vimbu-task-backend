import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Resort } from "./resort";
import { v4 as uuid4 } from "uuid";

enum Gender {
  MALE = "male",
  FEMALE = "female",
}

@Entity()
export class Instructor extends BaseEntity {
  @PrimaryColumn("uuid") id: string;

  @Column("varchar", { length: 255 }) firstName: string;

  @Column("varchar", { length: 255 }) lastName: string;

  @Column({ type: "enum", enum: Gender }) gender: Gender;

  @Column("int") rate: number;

  @Column("text") image: string;

  @ManyToOne(() => Resort, (resort) => resort.instructors)
  resort: Resort;

  @BeforeInsert()
  addId() {
    this.id = uuid4();
  }
}
