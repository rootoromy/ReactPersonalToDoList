import { useState } from 'react'
import ToDoList from './components/ToDoList';
import './App.css'

function App() {
  // const [items, setItems] = useState([]);
  // const [inputValue, setInputValue] = useState('');

  // const addItem = ()=>{
  //   if(inputValue.trim() != ''){
  //     setItems([...items, {text:inputValue, id:Date.now()}]);
  //     setInputValue('');
  //   }
  // };

  // const deleteTodo = (id)=>{
  //   setItems(items.filter((item)=>item.id !== id));
  // }
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addItem = ()=>{
    if(inputValue.trim() != ''){
      setItems([...items, {text:inputValue, completed:false, id:Date.now()}]);
      setInputValue('');
    }
  };
  const deleteTodo = (id)=>{
    setItems(items.filter((item)=>item.id !== id));
  };
  const toggleItemComplete = (id)=>{
    setItems(items.map(item => item.id==id ? {...item, completed: !item.completed} : item));
  };
  const moveItemUp = (index)=>{
    if(index > 0){
      const newItems = [...items];
      [newItems[index-1],newItems[index]] = [newItems[index],newItems[index-1]];
      setItems(newItems);
    }
  };
  const moveItemDown = (index)=>{
    if(index < items.length - 1){
      const newItems = [...items];
      [newItems[index+1],newItems[index]] = [newItems[index],newItems[index+1]];
      setItems(newItems);
    }
  };
  return (
    <>
      <h1>TODO List</h1>
      <div className='inputWrap'>
      <input
      type='text'
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      </div>
      <ToDoList 
        items={items} 
        deleteTodo={deleteTodo} 
        toggleItemComplete={toggleItemComplete} 
        moveItemUp={moveItemUp} 
        moveItemDown={moveItemDown} 
      />
      {/* <h1>ToDo List</h1>
      <input
      type='text'
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ToDoList items={items} deleteTodo={deleteTodo} /> */}
    </>
  )
}

export default App
