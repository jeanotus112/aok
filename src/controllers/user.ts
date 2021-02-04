import { RouterContext } from '@koa/router';

export default class UserController {
  public static async listUsers(ctx: RouterContext) {
    ctx.body = 'ListUsers controller';
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