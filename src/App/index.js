import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/TodoButton";

import "./App.css";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

// const defaultTodo = [
//   { text: "Task 1", completed: false },
//   { text: "Task 2", completed: false },
//   { text: "Task 3", completed: true },
// ];
function App() {
  const [todos, saveTodo] = useLocalStorage("TODOS_V1", []);
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

  const toogleTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodo(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
  };

  const addTodo = (message) => {
    const newTodos = [...todos];
    const createdTodo = {
      text: message,
      completed: false,
    };
    newTodos.push(createdTodo);
    saveTodo(newTodos);
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
