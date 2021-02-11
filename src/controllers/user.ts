import { RouterContext } from "@koa/router";
import { getManager } from "typeorm";
import { User } from "../entity/user";

export default class UserController {
  public static async listUsers(ctx: RouterContext) {
    const userRepository = getManager().getRepository(User);
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
    ctx.body = `DeleteUser controller with ID = ${ctx.params.id}`;
  }
}
