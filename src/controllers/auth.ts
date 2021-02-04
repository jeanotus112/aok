// src/controllers/auth.ts
import { RouterContext } from '@koa/router';
import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../constants'

export default class AuthController {
  public static async login(ctx: RouterContext) {
    if (!ctx.request.body.name) {
      ctx.status = 401;
      ctx.body = { message: '用户名不存在' };
    } else {
      ctx.status = 200;
      ctx.body = { token: jwt.sign({ id: Math.random() }, JWT_SECRET) };
    }
  }

  public static async register(ctx: RouterContext) {
    ctx.body = 'Register controller';
  }
}
