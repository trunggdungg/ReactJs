import './App.css';

// use-Ref luôn trả về 1 object
import React, { useRef, useState } from 'react';


function App() {
  const [count, setCount] = useState(60);
  let timerId = useRef();

  const handleStart = () => {

    timerId.current = setInterval(() => {

      setCount(prevCount => prevCount - 1);

    }, 1000)
    console.log('Timer started', timerId.current);
  }
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log('Timer stopped', timerId.current);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </header>
    </div>
  );
}

export default App;
