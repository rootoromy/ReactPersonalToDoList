import React from "react";

function ToDoItem({item}) {
  return (
    <li>{item.text}</li>
  );
}

export default ToDoItem;