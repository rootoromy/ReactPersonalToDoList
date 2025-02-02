import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({items}){
  return(
    <ul>
      {items.map(item =>(
        <ToDoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ToDoList;