
import './App.css';
import {useCallback, useState } from 'react';
import Content from './Content';
function App() {

  const [count, setCount] = useState(0);

  const handleSetcount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
    console.log("Count is: " + count);
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <Content onIncre={handleSetcount} />
        <p>{count}</p>

      </header>
    </div>
  );
}

export default App;
