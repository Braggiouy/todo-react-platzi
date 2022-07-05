import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="todo-search"
      onChange={onSearchValueChange}
      placeholder="Add your item here, please"
      value={searchValue}
    />
  );
}

export { TodoSearch };
