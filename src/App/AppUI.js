import React from "react";
import "./App.css";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/TodoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    error,
    loading,
    filteredTodo,
    toogleTodo,
    deleteTodos,
    addTodo,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <div className="todo-box">
      <TodoCounter />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {error && <p>Drive nuts, there was an error</p>}
        {loading && <p>We are loading your data</p>}
        {!loading && !filteredTodo.length && (
          <p>All good, start creating your todo item</p>
        )}
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
