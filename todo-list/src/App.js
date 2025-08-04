import './App.css';

import React, { useState } from 'react';
function App() {
  const storedTodos = localStorage.getItem('todos');// lấy dữ liệu từ localStorage, dữ liệu này là chuỗi JSON
  // chuyển đổi chuỗi JSON thành mảng
  
  const [inputValue, setInputValue] = useState('');
  
  const [todos, setTodos] = useState(() => {

    const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];// nếu không có dữ liệu trong localStorage thì khởi tạo mảng rỗng
    console.log(initialTodos);
    return initialTodos;
  });

  const handleSubmit = () => {
    setTodos(prev => {
      const newTodos = [...prev, inputValue];
      // lưu mảng mới vào localStorage dưới dạng chuỗi JSON
      const jsonData = JSON.stringify(newTodos);
      localStorage.setItem('todos', jsonData);
      
      return newTodos;
    });
    // Xóa giá trị input sau khi thêm vào danh sách
    setInputValue('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <input type="text" placeholder="Add a new task" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleSubmit} style={{ marginLeft: '8px' }}>Add Task</button>
        <ul>
          {/* Duyệt qua mảng todos và hiển thị từng todo trong một thẻ li */}
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
