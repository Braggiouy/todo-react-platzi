import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch.js";
import { TodoList } from "./components/TodoList/TodoList.js";
import { TodoItem } from "./components/TodoItem/TodoItem.js";
import { CreateTodoButton } from "./components/TodoButton/CreateTodoButton.js";

import "./App.css";

const defaultTodo = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: true },
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodo);
  const [searchValue, setSearchValue] = React.useState("");

  // For todoCounter
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // For todoInput (filter by what the user types)
  let filteredTodo = [];

  if (!searchValue.length >= 1) {
    filteredTodo = todos;
  } else {
    filteredTodo = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchValueText = searchValue.toLowerCase();
      console.log(todoText.includes(searchValueText));
      return todoText.includes(searchValueText);
    });
  }

  return (
    <div className="todo-box">
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {filteredTodo.map((todo) => (
          <TodoItem
            key={todo.text}
            value={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
