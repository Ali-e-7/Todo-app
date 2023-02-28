import React from "react";

export default function FilterTodo(props) {
  function handelTodoList(condition) {
    props.showTodoList(condition)
  }
  return (
    <div className="filters">
      <button onClick={() => handelTodoList("all")}>همه</button>
      <button onClick={() => handelTodoList("done")}>انجام شده</button>
      <button onClick={() => handelTodoList("progress")}>درحال انجام</button>
    </div>
  );
}
