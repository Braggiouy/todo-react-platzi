import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch.js";
import { TodoList } from "./components/TodoList/TodoList.js";
import { TodoItem } from "./components/TodoItem/TodoItem.js";
import { CreateTodoButton } from "./components/TodoButton/CreateTodoButton.js";

import "./App.css";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
];
function App() {
  return (
    <div className="todo-box">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} value={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
