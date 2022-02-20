import React, { useState, FC } from "react";
import Button from "react-bootstrap/Button";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: FC<Props> = ({
  todo,
  //   index,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.complete ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        {todo.complete !== true ? (
          <Button
            className="listButtons"
            variant="success"
            onClick={() => toggleTodo(todo)}
          >
            Complete
          </Button>
        ) : (
          <></>
        )}
        <Button
          className="listButtons"
          variant="warning"
          onClick={() => deleteTodo(todo)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
