import React from "react";

import "./TodoItem.css";

function TodoItem(props) {
  const onComplete = () => {
    alert(" Todo completed. " + props.value);
  };
  const onDelete = () => {
    alert(" Todo deleted. " + props.value);
  };
  return (
    <li className="item-todo">
      <span
        className={`icon icon-check ${props.completed && "icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`item-text ${props.completed && "item-text--complete"}`}>
        {props.value}
      </p>
      <span className="icon icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
