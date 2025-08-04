
import '../App.css';
import { useReducer, useState,useRef } from 'react';
import reducer2, {initialState} from './reducer'
import { setJob, addJob, deleteJob } from './action';
// useState
// 1. init state : 0
// 2. Action: Increate(state + 1), Decreate(state - 1)

// useReducer
// 1. init state : 0
// 2. Action: Increate(state + 1), Decreate(state - 1)
// 3. Reducer
// 4. Dispatch

// bài 1
// Initial state is 0
const initState = 0;

// Action
const INCREMENT = 'incre';
const DECREMENT = 'decre';

// Reducer function
function reducer(state, action) {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      throw new Error(`Unknown action: ${action}`);
  }
}


// bài 2



// Dispatch function

function App() {
  // comment : bài reducer 1
  // useReducer hook có thể nhận tới 3 đối số: reducer, initialState, và một hàm khởi tạo (init function)

  // const [count, dispatch] = useReducer(reducer, initState);
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>{count}

  //       </h1>
  //       <br />
  //       <button onClick={
  //         () => dispatch(INCREMENT)}>
  //           Increment</button>
  //       <button onClick={
  //         () => dispatch(DECREMENT)}>
  //           Decrement</button>
  //     </header>
  //   </div>
  // );
  // comment : bài reducer 2

  const [state, dispatch] = useReducer(reducer2, initialState);
  const { job, jobs } = state;

  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do List</h1>
        <input
          ref={inputRef}
          value={job}
          placeholder='Enter your task here...'
          onChange={e => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button onClick={handleSubmit}>Add</button>
        <br />
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
