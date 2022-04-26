import React from "react";

function TodoList(props) {
  console.log("props", props);
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
