import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../TodoContext";

function CreateTodoButton() {
  const { addTodo, searchValue } = React.useContext(TodoContext);
  return (
    <button className="create-todo-button" onClick={() => addTodo(searchValue)}>
      +
    </button>
  );
}

export { CreateTodoButton };
