
import './App.css';
import Button from './components/Button';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import GlobalStyles from './components/GlobalStyles';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyles>
          <Heading />
          <Paragraph />
          <Button />
          <Button primary />
        </GlobalStyles>
        <div className='d-flex'>
          <span>Item 1</span>
          <span>Item 2</span>
        </div>
      </header>
    </div>
  );
}

export default App;
