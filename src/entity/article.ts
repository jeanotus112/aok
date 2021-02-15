import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  date: string;

  @Column()
  content: string;

  @Column()
  tag: string;

  @Column()
  topic: string;
}