import fastify from "fastify";
import { todoRoute } from "../modules/todo/todo.route";

export const createServer = async () => {
  const app = fastify();

  app.register(todoRoute, { prefix: "/api/todos" });

  return app;
};
