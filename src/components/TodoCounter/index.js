import React from "react";

import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
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
