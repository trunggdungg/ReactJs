import './App.css';
// đây là src để test useEffect time và useEffect preview avatar
// --------------------
// useEffectLayout cũng giống với useEffect nhưng nó sẽ chạy trước khi DOM được cập nhật
// --------------------
import React, { useEffect, useState } from 'react';
function App() {

  const [countDown, setCountDown] = useState(180);

  // setInterval
  useEffect(() => {
    setInterval(() => {
      setCountDown(prevState => prevState - 1);

    }, 1000);

  }, []);

  const [avatar, setAvatar] = useState();
  // useEffect preview ảnh
  useEffect(() => {
    // function để dọn dẹp bộ nhớ
    return (() => {
      avatar && URL.revokeObjectURL(avatar.preview);
    })
  }, [avatar]);
  // xem trước ảnh
  const handlePreview = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    } else {
      const file = e.target.files[0];

      file.preview = URL.createObjectURL(file);
      setAvatar(file);
      console.log(URL.createObjectURL(file));
    }
  }
  // vì file là object nên ta có thể tùy chỉnh được thuộc tính của nó, ta thêm preview
  // khi đó avatar sẽ có thuộc tính preview

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Countdown: {countDown}</h1> */}
        <input
          type="file"
          onChange={handlePreview}
        />
        {avatar && (<img src={avatar.preview} alt="Preview" width="50%" />)}
      </header>
    </div>
  );
}

export default App;
