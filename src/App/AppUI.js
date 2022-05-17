import React from "react";
import "./App.css";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/TodoButton";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  filteredTodo,
  toogleTodo,
  deleteTodos,
  addTodo,
}) {
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

export { AppUI };
