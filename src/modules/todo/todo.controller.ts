import { FastifyReply, FastifyRequest } from "fastify";
import { logger } from "../../utils/logger";
import { createTodo } from "./todo.service";

export const createTodoHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const todo = await createTodo(request.body);
    return reply.code(201).send(todo);
  } catch (e) {
    logger.error(e, "createTodoHandler: error creating todo");
    return reply.code(400).send({ message: "Error creating todo" });
  }
};
