import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const toDoIndex = todos.indexOf(selectedTodo);
    console.log(`To Do Index of ${selectedTodo} is ${toDoIndex}`);
    const newTodos = todos.map((todo) => {
      if (todo == selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (selectedTodo: Todo) => {
    const toDoIndex = todos.indexOf(selectedTodo);
    const newTodos = [...todos];
    newTodos.splice(toDoIndex, 1);
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <Container fluid>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <AddTodoForm addTodo={addTodo} />
      </Container>
    </div>
  );
}

export default App;
