import React from "react";

import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <>
      <h1 className="todo-title"> 🌴 Yo yo yo 🌴 </h1>
      <h2 className="todo-counter">
        {" "}
        {completed} out of {total} todos completed
      </h2>
    </>
  );
}

export { TodoCounter };
