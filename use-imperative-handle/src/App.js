import Video from './Video';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const videoRef = useRef();

  useEffect(() => {
    // Access the video element through the ref
    console.log(videoRef.current);
  }, []);

  const handlePlay = () => {
    videoRef.current.play();
  }
  const handlePause = () => {
    videoRef.current.pause();
  }
  return (
    <div className="App">
      <header className="App-header">
        <Video ref={videoRef} />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </header>
    </div>
  );
}

export default App;
