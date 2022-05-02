import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return [
    <input
      className="todo-search"
      onChange={onSearchValueChange}
      placeholder="Add your item here "
      value={searchValue}
    />,
    <p> {searchValue} </p>,
  ];
}

export { TodoSearch };
