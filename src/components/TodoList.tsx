import React, { FC } from "react";
import { TodoListItem } from "./TodoListItem";
import ListGroup from "react-bootstrap/ListGroup";

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div datatest-id="todoList">
      {todos.map((todo) => (
        <ListGroup.Item>
          <TodoListItem
            data-testid="todoListItem"
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
