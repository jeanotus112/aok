import { RouterContext } from "@koa/router";

export function logger() {
  return async (ctx: RouterContext, next: () => Promise<void>) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
  };
}