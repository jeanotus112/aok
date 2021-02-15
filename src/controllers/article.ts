import { RouterContext } from "@koa/router";
import { getManager } from "typeorm";
import { Article } from "../entity/article";

export default class ArticleController {
  public static async getAllArts(ctx: RouterContext) {
    const userRepository = getManager().getRepository(Article);
    const users = await userRepository.find();

    ctx.status = 200;
    ctx.body = users;
  }

  public static async showUserDetail(ctx: RouterContext) {
    ctx.body = `ShowUserDetail controller with ID = ${ctx.params.id}`;
  }

  public static async updateUser(ctx: RouterContext) {
    ctx.body = `UpdateUser controller with ID = ${ctx.params.id}`;
  }

  public static async deleteUser(ctx: RouterContext) {
    const userRepository = getManager().getRepository(Article);
    await userRepository.delete(+ctx.params.id);

    ctx.status = 204;
  }
}
