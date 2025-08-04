// import logo from './logo.svg';
import './App.css';
import{ useState } from 'react';

function App() {

  const [info, setInfo] = useState({
    name: 'Loading...',
    version: 'Loading...',
    description: 'Loading...'
  });
  const handleUpdate  = () =>{
    setInfo({
      name: 'My App',
      version: '1.0.0',
      description: 'This is a sample application.'
    });
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update Info</button>
    </div>
  );
}

export default App;
