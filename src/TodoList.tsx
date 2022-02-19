import React, { FC } from "react";
import { TodoListItem } from "./TodoListItem";
import ListGroup from "react-bootstrap/ListGroup";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ListGroup.Item>
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        </ListGroup.Item>
      ))}
    </ul>
  );
};