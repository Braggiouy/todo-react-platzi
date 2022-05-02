import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      className="todo-search"
      onChange={onSearchValueChange}
      placeholder="Add your item here "
    />
  );
}

export { TodoSearch };
