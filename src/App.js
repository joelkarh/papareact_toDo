
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const addTodo=(e)=>{
    e.preventDefault() // prevent refresh from page 
   // console.log(`this is the value ${input}`);
    setTodos([...todos,input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* go ahead and take the value and reference it  */}
      {/* putting it in the form will make use of the enter key */}
      <form action="">
      <input type="text" className='' value={input} onChange={(e)=>setInput(e.target.value) }/>  
      <button type="submit" onClick={addTodo}>Add todo</button>
      </form> 
      <hr/>
      <h2>List of Todos</h2>
      <ul>
      {
        todos.map((todo,i)=>
        <li key={i}>{todo}</li>
        )
      }
      </ul>
    </div>
  );
}

export default App;
