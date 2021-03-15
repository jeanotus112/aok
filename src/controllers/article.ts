import { RouterContext } from "@koa/router";
import { getRepository } from "typeorm";
import { Article } from "../entity/article";
import { getConnection } from "typeorm";

export default class ArticleController {
  public static async getArticles(ctx: RouterContext) {
    const { topic, page, pageSize, tag, userId } = ctx.request.query;

    const limit = pageSize ? Number(pageSize) : 10;
    console.log(topic, limit);

    const articles = await getRepository(Article)
      .createQueryBuilder("article")
      .leftJoinAndSelect("article.author", "user")
      .where("article.author = :id", { id: userId })
      // .where("article.topic=:topic", { topic })
      .take(limit)
      .getMany();
    ctx.status = 200;
    ctx.body = articles;
  }

  public static async publish(ctx: RouterContext) {
    const { title, content, tag, topic, author } = ctx.request.body;

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Article)
      .values({
        author,
        title,
        date: new Date().getTime().toString(),
        content,
        tag,
        topic,
      })
      .execute();
    ctx.status = 200;
  }

  public static async update(ctx: RouterContext) {
    const { content } = ctx.request.body;
    await getConnection()
      .createQueryBuilder()
      .update(Article)
      .set({ content, tag: "Saw" })
      .where("id = :id", { id: 1 })
      .execute();
    ctx.body = "success";
    ctx.status = 200;
  }

  public static async deleteArticle(ctx: RouterContext) {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Article)
      .where("id=:id", { id: ctx.params.id })
      .execute();
    ctx.status = 204;
  }
}
