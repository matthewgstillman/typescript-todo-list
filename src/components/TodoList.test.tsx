import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoList, TodoListProps } from "./TodoList";

const mockToggleTodo = jest.fn();
const mockDeleteTodo = jest.fn();
const mockTodos = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Eat my dinner",
    complete: false,
  },
];

test("To Do List is in Document", () => {
  render(
    <TodoList
      todos={mockTodos}
      toggleTodo={mockToggleTodo}
      deleteTodo={mockDeleteTodo}
    />
  );
  const firstTodo = screen.getByText(mockTodos[0]["text"]);
  const secondTodo = screen.getByText(mockTodos[1]["text"]);
  expect(firstTodo).toBeInTheDocument();
  expect(secondTodo).toBeInTheDocument();
});
