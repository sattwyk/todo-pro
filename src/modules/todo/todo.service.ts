import { nanoid } from "nanoid";
import { TodoModel } from "./todo.model";

export const createTodo = async (input: any) => {
  const shortId = `todo_${nanoid()}`;
  return TodoModel.create({
    shortId,
    ...input,
  });
};
