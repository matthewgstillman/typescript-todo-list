import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoListItem, TodoListItemProps } from "./TodoListItem";

const mockToggleTodo = jest.fn();
const mockDeleteTodo = jest.fn();

test("Todo List Item renders", () => {
  const initialTodoItem = {
    text: "Walk the dog",
    complete: false,
  };
  render(
    <TodoListItem
      todo={initialTodoItem}
      toggleTodo={mockToggleTodo}
      deleteTodo={mockDeleteTodo}
    />
  );
  const todoListElement = screen.getByText("Walk the dog");
  expect(todoListElement).toBeInTheDocument();
});
