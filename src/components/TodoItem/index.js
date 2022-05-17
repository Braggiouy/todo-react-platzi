import React from "react";

import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="item-todo">
      <span
        className={`icon icon-check ${props.completed && "icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`item-text ${props.completed && "item-text--complete"}`}>
        {props.value}
      </p>
      <span className="icon icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
