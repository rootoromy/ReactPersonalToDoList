import { useState } from 'react'
import ToDoList from './components/ToDoList';
import './App.css'

function App() {

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if(inputValue.trim() != ''){
      setItems([...items, {text:inputValue, id: Date.now()}]);
      setInputValue('');
    }
  };
  return (
    <>
      <h1>ToDo List</h1>
      <input
      type='text'
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ToDoList items={items}/>
    </>
  )
}

export default App
