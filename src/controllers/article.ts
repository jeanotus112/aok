import { RouterContext } from "@koa/router";
import { getRepository } from "typeorm";
import { Article } from "../entity/article";
import { getConnection } from "typeorm";

export default class ArticleController {
  public static async getArticles(ctx: RouterContext) {
    const { topic = "科幻", page, pageSize, tag } = ctx.request.query;

    const limit = pageSize ? Number(pageSize) : 10;
    console.log(topic, limit);

    const articles = await getRepository(Article)
      .createQueryBuilder("article")
      .where("article.topic=:topic", { topic })
      .take(limit)
      .getMany();
    ctx.status = 200;
    ctx.body = articles;
  }

  public static async showUserDetail(ctx: RouterContext) {
    ctx.body = `ShowUserDetail controller with ID = ${ctx.params.id}`;
  }

  public static async updateUser(ctx: RouterContext) {
    ctx.body = `UpdateUser controller with ID = ${ctx.params.id}`;
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
