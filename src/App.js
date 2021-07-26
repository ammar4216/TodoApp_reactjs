import React, { useState } from "react";
import "./App.css";
import NewList from "./Components/NewList/NewList";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEventHandler = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList("");
  };

  // Todo List Component Function
  const deleteItemHandler = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <br />
      <NewList
        valued={inputList}
        onChanged={itemEventHandler}
        onCliked={listOfItems}
      />
      <br />
      {Items.map((itemVal, index) => {
        return (
          <TodoList
            key={index}
            text={itemVal}
            id={index}
            onSelect={deleteItemHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
