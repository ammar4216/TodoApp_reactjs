import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="todo-list">
      <li>{props.text}</li>
      <i
        className="fa fa-minus-circle"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
    </div>
  );
}

export default TodoList;
