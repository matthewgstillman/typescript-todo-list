import React, { useState, FC } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export interface AddTodoProps {
  addTodo: AddTodo;
}

export const AddTodoForm: FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <br />
      <h1 className="header" datatest-id="addTodoHeader">
        Add New To Do Item
      </h1>
      <Form datatest-id="addTodoForm">
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          data-testid="firstHeader"
        >
          <Form.Control
            data-testid="todoForm"
            type="text"
            value={text}
            placeholder="Add Todo"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
          variant="primary"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
};
