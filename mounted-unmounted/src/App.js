import Content from './Content';
import './App.css';

import {useState} from 'react';
// Mounted là thời điểm đưa component vào sử dụng, còn unmounted là thời điểm component không còn được sử dụng nữa.
function App() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
      <button onClick = {() =>{setShowContent(!showContent)}}>Show</button>
        {showContent  && <Content />}
      
      </header>
    </div>
  );
}

export default App;
