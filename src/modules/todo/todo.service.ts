import { nanoid } from "nanoid";
import { TodoModel, Todo } from "./todo.model";
import { CreateTodoBody } from "./todo.schema";

export const createTodo = async (input: CreateTodoBody): Promise<Todo> => {
  const shortId = `todo_${nanoid()}`;
  return TodoModel.create({
    shortId,
    ...input,
  });
};
