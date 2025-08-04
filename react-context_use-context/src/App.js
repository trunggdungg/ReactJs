import './App.css';
import Content from './Content';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'



function App() {
  const themeContext = useContext(ThemeContext);

  return (

    <div className="App">
      <header className="App-header">
        <button onClick={themeContext.toggleTheme}>Toggle theme</button>
        <Content />
      </header>
    </div>

  );
}

export default App;
