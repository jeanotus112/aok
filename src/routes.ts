import Router from "@koa/router";

import AuthController from "./controllers/auth";
import UserController from "./controllers/user";
import ArticleController from "./controllers/article";

const unprotectedRouter = new Router();

// auth 相关的路由
unprotectedRouter.post("/auth/login", AuthController.login);
unprotectedRouter.post("/auth/register", AuthController.register);
unprotectedRouter.get("/posts", ArticleController.getArticles);
unprotectedRouter.post("/article/publish", ArticleController.publish);
unprotectedRouter.post("/article/delete", ArticleController.deleteArticle);

const protectedRouter = new Router();

// users 相关的路由
protectedRouter.get("/users", UserController.listUsers);
protectedRouter.post("/users1", UserController.listUsers);
protectedRouter.get("/users/:id", UserController.showUserDetail);
protectedRouter.put("/users/:id", UserController.updateUser);
protectedRouter.delete("/users/:id", UserController.deleteUser);

export { protectedRouter, unprotectedRouter };
