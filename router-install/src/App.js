import { Routes, Route,Link } from 'react-router-dom';// sử dụng  Link để tạo điều hướng giống với thẻ <a> trong HTML ( SPA)
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import NewsPage from './pages/News';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
             <Link to="/contact">Contact</Link>
            </li>
            <li>
             <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
