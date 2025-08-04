
import './App.css';

import { useMemo, useState,useRef } from 'react';
function App() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts(
      [...products,
      {
        name,
        price: Number(price)
      }]);

    setName('');
    setPrice('');
    nameRef.current.focus();
  }
  //useMemo : đối số thứ nhất sẽ là 1 hàm trả về giá trị cần tính toán,
  //đối số thứ hai là mảng các giá trị phụ thuộc, khi nào các giá trị này thay đổi thì hàm sẽ được gọi lại
  const total = useMemo(() => {
    const result = products.reduce((total, product) => {
      console.log('tinh lai...');

      return total + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="App">
      <header className="App-header">
        <input ref= {nameRef} value={name} onChange={(e) => setName(e.target.value)}></input>
        <input value={price} onChange={(e) => setPrice(e.target.value)}></input>

        <br />
        <button onClick={handleSubmit}> Add</button>

        <br />
        Total:{total}
        <ul>
          {products.map((product, index) =>
            <li key={index}>{product.name} - {product.price}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
