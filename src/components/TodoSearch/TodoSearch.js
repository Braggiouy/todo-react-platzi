import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="todo-search"
      onChange={onSearchValueChange}
      placeholder="Add your item here "
      value={searchValue}
    />
  );
}

export { TodoSearch };
