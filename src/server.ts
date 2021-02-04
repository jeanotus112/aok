// src/server.ts
import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { protectedRouter, unprotectedRouter } from './routes'
import {logger} from './logger'
import jwt from 'koa-jwt'
import {JWT_SECRET} from './constants'

// 初始化 Koa 应用实例
const app = new Koa();

// 注册中间件
app.use(logger())
app.use(cors());
app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // 只返回 JSON 格式的响应
    ctx.status = err.status || 500;
    ctx.body = { message: err.message };
  }
});

app.use(unprotectedRouter.routes()).use(unprotectedRouter.allowedMethods());
app.use(jwt({ secret: JWT_SECRET }).unless({ method: 'GET' }))
app.use(protectedRouter.routes()).use(protectedRouter.allowedMethods());

// 运行服务器
app.listen(3000);