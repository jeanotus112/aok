import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./user";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany((type) => User, (user) => user.articles)
  author: User;

  @Column()
  date: string;

  @Column()
  content: string;

  @Column()
  tag: string;

  @Column()
  topic: string;
}
