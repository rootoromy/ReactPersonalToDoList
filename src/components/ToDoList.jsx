import React from 'react';
import ToDoItem from './ToDoItem';

// function ToDoList({items,deleteTodo}){
//   return(
//     <ul>
//       {items.map(item =>(
//         <ToDoItem key={item.id} item={item} deleteTodo={deleteTodo} />
//       ))}
//     </ul>
//   );
// }

function ToDoList ({items,deleteTodo,toggleItemComplete,moveItemUp,moveItemDown}){
  return(
    <ul>
      {items.map((item, index) =>(
        <ToDoItem 
          key={item.id} 
          item={item} 
          index={index}
          deleteTodo={deleteTodo} 
          toggleItemComplete={toggleItemComplete}
          moveItemUp={moveItemUp} 
          moveItemDown={moveItemDown} 
        />
      ))}
    </ul>
  )
}

export default ToDoList;