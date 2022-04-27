import React from "react";

import "./TodoItem.css";

function TodoItem(props) {
  console.log(props);
  return (
    <li className="item-box">
      <span className="item-icon">✅</span>
      <p className="item-text">{props.value}</p>
      <span className="item-icon">x</span>
    </li>
  );
}

export { TodoItem };
