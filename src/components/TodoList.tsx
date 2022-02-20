import React, { FC } from "react";
import { TodoListItem } from "./TodoListItem";
import ListGroup from "react-bootstrap/ListGroup";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList: FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <h1 className="header">To Do List</h1>
      {todos.map((todo) => (
        <ListGroup.Item>
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </ListGroup.Item>
      ))}
    </div>
  );
};
