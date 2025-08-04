import './App.css';

import { useState } from 'react';

const gifts = [
  'CPU I9-13900K',
  'GPU RTX 4090',
  'RAM 64GB DDR5',
  'SSD 2TB NVMe',
]

function App() {
  const [gift, setGift] = useState();
  
  const handleClick = ()=>{
    const randomIndex = Math.floor(Math.random() * gifts.length)
    console.log(gifts[randomIndex]);
    setGift(gifts[randomIndex]);
  }
  return (
    <div className="App">
      <header className="App-header">
        
      <h1>Welcome to the Gift App: {gift}</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}  >Lấy thưởng ngẫu nhiên</button>

      </header>
    </div>
  );
}

export default App;
