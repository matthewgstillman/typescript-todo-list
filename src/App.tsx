import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
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
    text: "Eat my dinner",
    complete: false,
  },
];

const completedTasks: CompletedTodo[] = [
  {
    text: "Finish my project",
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const [completedTodos, setCompletedTodos] = useState(completedTasks);

  const toggleTodo = (selectedTodo: Todo) => {
    const toDoIndex = todos.indexOf(selectedTodo);
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
    //Tried changing the order of the next two lines to see whether that fixed it
    // addToCompletedTodoList({ text: selectedTodo.text });
    addToCompletedTodoList(selectedTodo);
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const addToCompletedTodoList = (selectedTodo: CompletedTodo) => {
    const completedTodoListItems = [...completedTodos];
    setCompletedTodos([...completedTodoListItems, { text: selectedTodo.text }]);
    console.log(completedTodos);
  };

  return (
    <div className="app">
      <Container fluid>
        <h1 className="header" datatest-id="firstHeader">
          To Do List
        </h1>
        <TodoList
          datatest-id="todoList"
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <AddTodoForm addTodo={addTodo} />
        <br />
        {completedTodos.map((completed) => {
          <h4>{completed.text}</h4>;
        })}
      </Container>
    </div>
  );
}

export default App;
