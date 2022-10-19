import { createServer } from "./../../../utils/createServer";
import { describe, it, vi, expect } from "vitest";
import * as TodoService from "./../todo.service";
import { nanoid } from "nanoid";

describe('POST "/api/todos" route', () => {
  it("should call the createTodo service", async () => {
    const createTodoSpy = vi.spyOn(TodoService, "createTodo");

    expect(createTodoSpy.getMockName()).toEqual("createTodo");

    const todo = {
      _id: "mock id",
      title: "mock title",
      shortId: nanoid(),
      complete: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    createTodoSpy.mockResolvedValue(todo);

    const sever = await createServer();

    await sever.ready();

    const payload = {
      title: "A test todo",
    };

    const response = await sever.inject({
      method: "POST",
      url: "/api/todos",
      payload,
    });

    expect(response.json()).toEqual(todo);

    expect(createTodoSpy).toBeCalledWith(payload);
  });
});
