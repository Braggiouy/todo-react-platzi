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
  loading,
  error,
}) {
  return (
    <div className="todo-box">
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {error && <p>Drive nuts, there was an error</p>}
      {loading && <p>We are loading your data</p>}
      {!loading && !filteredTodo.length && (
        <p>All good, start creating your todo item</p>
      )}
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
