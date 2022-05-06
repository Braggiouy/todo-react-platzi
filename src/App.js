import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch.js";
import { TodoList } from "./components/TodoList/TodoList.js";
import { TodoItem } from "./components/TodoItem/TodoItem.js";
import { CreateTodoButton } from "./components/TodoButton/CreateTodoButton.js";

import "./App.css";

const defaultTodo = [
  { text: "Task 1", completed: false },
  { text: "Task 2", completed: false },
  { text: "Task 3", completed: true },
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
      return todoText.includes(searchValueText);
    });
  }

  const toogleTodo   = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  // const addTodo = () => {

  // };

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
            onComplete={() => toogleTodo  (todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
