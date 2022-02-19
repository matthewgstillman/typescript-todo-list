import React, { useState, FC } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      {/* <form>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
        >
          Add Todo
        </button>
      </form> */}
      <br />
      <h1>Add New To Do Item</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
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
