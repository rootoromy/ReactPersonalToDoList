import React from "react";

// function ToDoItem({item, deleteTodo}){
//   return(
//     <li>{item.text}<button onClick={()=>deleteTodo(item.id)}>Delete</button></li>
//   );
// }

function ToDoItem({item, index, deleteTodo, toggleItemComplete, moveItemUp, moveItemDown}){
  return(
    <li>
      <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.text}</span>
      <button onClick={()=>deleteTodo(item.id)}>Delete</button>
      <button onClick={()=>toggleItemComplete(item.id)}>{item.completed ? '未完了': '完了'}</button>
      <button onClick={()=>moveItemUp(index)}>↑</button>
      <button onClick={()=>moveItemDown(index)}>↓</button>
    </li>
  )
}
export default ToDoItem;
