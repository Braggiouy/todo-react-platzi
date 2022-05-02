import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    console.log(msg);
  };

  return (
    <button
      className="create-todo-button"
      onClick={() => onClickButton("holis")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
