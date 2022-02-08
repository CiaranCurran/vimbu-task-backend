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
export class Resort extends BaseEntity {
  @PrimaryColumn("uuid") id: string;

  @Column("varchar", { length: 255 }) name: string;

  @Column("varchar", { length: 255 }) country: string;

  @BeforeInsert()
  addId() {
    this.id = uuid4();
  }
}
