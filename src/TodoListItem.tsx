import React, { useState, FC } from "react";
import Button from "react-bootstrap/Button";

interface Props {
  todo: Todo;
  //   index: DeleteTodo;
  toggleTodo: ToggleTodo;
  //   deleteTodo: DeleteTodo;
}

export const TodoListItem: FC<Props> = ({
  todo,
  //   index,
  toggleTodo,
  //   deleteTodo,
}) => {
  return (
    <div className="todo">
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />
        {todo.text}
      </label>
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
        // onClick={() => deleteTodo(index)}
      >
        Remove
      </Button>
    </div>
  );
};
