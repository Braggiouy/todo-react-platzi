import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, addTodo }) {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="todo-search"
      onChange={onSearchValueChange}
      placeholder="Add your item here, please"
      value={searchValue}
      onKeyDown={addTodo}
    />
  );
}

export { TodoSearch };
