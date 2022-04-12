import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddTodoForm, AddTodoProps } from "./AddTodoForm";

const mockAddTodo = jest.fn();

test("Add Todo header is in document", () => {
  render(<AddTodoForm addTodo={mockAddTodo} />);
  const addTodoHeaderElement = screen.getByText("Add New To Do Item");
  expect(addTodoHeaderElement).toBeInTheDocument();
});

test("Add Button has rendered", () => {
  render(<AddTodoForm addTodo={mockAddTodo} />);
  const buttonElement = screen.getByText("Add");
  expect(buttonElement).toBeInTheDocument();
});
