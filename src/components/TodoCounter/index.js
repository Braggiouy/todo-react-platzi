import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <>
      <h1 className="todo-title"> Todo Counter </h1>
      <h2 className="todo-counter">
        {" "}
        {completedTodos} out of {totalTodos} todos completed
      </h2>
    </>
  );
}

export { TodoCounter };
