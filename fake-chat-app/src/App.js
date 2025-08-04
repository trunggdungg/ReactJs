
import './App.css';

import React, { useEffect, useState } from 'react';

const lessonList = [
  { id: 1, name: 'Lesson 1' },
  { id: 2, name: 'Lesson 2' },
  { id: 3, name: 'Lesson 3' },
];

function App() {

  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {

    const handleEcommit = (e) => {
      console.log(e.detail);
    }

    window.addEventListener(`lesson-${lessonId}`, handleEcommit)

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleEcommit);
    }
  }, [lessonId]);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {lessonList.map(lesson => (
            <li
              key={lesson.id}
              onClick={() => setLessonId(lesson.id)}
              style={{ cursor: 'pointer', color: lesson.id === lessonId ? 'red' : 'green' }}
            >
              {lesson.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
