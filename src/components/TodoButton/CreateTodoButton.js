import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    console.log("asdas");
  };

  return (
    <button className="create-todo-button" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
