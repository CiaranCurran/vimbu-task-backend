import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { v4 as uuid4 } from "uuid";
import { Instructor } from "./instructor";

@Entity()
export class Resort extends BaseEntity {
  @PrimaryColumn("varchar") id: string;

  @Column("varchar", { length: 255 }) name: string;

  @Column("varchar", { length: 255 }) country: string;

  @Column("double precision") longitude: number;

  @Column("double precision") latitude: number;

  @Column("text") image: string;

  @OneToMany(() => Instructor, (instructor) => instructor.resort)
  instructors: Instructor[];
}
