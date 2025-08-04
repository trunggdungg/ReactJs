
import './App.css';
import { useState } from 'react';
import Content from './Content';
function App() {

  const [count, setCount] = useState(0);

  const handleSetcount = () =>{
    setCount(count + 1);
    console.log("Count is: " + count);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Content />
        <p>{count}</p>

        <button onClick={handleSetcount}>Increment</button>
      </header>
    </div>
  );
}

export default App;
