import React, { useState, FC } from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <div>
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
    </div>
  );
};
