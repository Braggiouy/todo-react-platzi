import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  return (
    <button className="create-todo-button" onClick={props.addTodo}>
      +
    </button>
  );
}

export { CreateTodoButton };
