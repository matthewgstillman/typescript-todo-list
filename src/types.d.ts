interface Todo {
  text: string;
  complete: boolean;
}

interface CompletedTodo {
  text: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

type DeleteTodo = (selectedTodo: Todo) => void;
