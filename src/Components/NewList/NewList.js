import React from "react";
import "./NewList.css";

function NewList(props) {
  return (
    <div className="input-controls">
      <input
        type="text"
        S
        placeholder="add items..."
        onChange={props.onChanged}
        value={props.valued}
      />
      <button onClick={props.onCliked}>+</button>
    </div>
  );
}

export default NewList;
