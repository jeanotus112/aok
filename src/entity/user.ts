import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Article } from "./article";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @Column()
  email: string;

  @OneToMany((type) => Article, (article) => article.author)
  articles: Article[];
}
