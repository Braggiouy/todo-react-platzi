import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch.js";
import { TodoList } from "./components/TodoList/TodoList.js";
import { TodoItem } from "./components/TodoItem/TodoItem.js";
import { CreateTodoButton } from "./components/TodoButton/CreateTodoButton.js";

import "./App.css";

// const defaultTodo = [
//   { text: "Task 1", completed: false },
//   { text: "Task 2", completed: false },
//   { text: "Task 3", completed: true },
// ];
function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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
      return todoText.includes(searchValueText);
    });
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  };

  const toogleTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (message) => {
    const newTodos = [...todos];
    const createdTodo = {
      text: message,
      completed: false,
    };
    newTodos.push(createdTodo);
    setTodos(newTodos);
  };

  // For todoItem
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
            onComplete={() => toogleTodo(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton addTodo={() => addTodo(searchValue)} />
    </div>
  );
}

export default App;
