import { useReducer,useRef } from 'react';
import reducer, { initialState } from './Components/reducer';
import { setTodo, addTodo, deleteTodo } from './Components/actions';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todo, todos } = state

  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(setTodo(''));
    dispatch(addTodo(todo));
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <header className="App-header">
        <input
        ref = {inputRef}
        value={todo}
        onChange = {e => dispatch(setTodo(e.target.value))}
         placeholder='Nhập nội dung công việc' />
        <br></br>
        <button onClick = {handleSubmit}>Thêm công việc</button>

        <ul>
          {todos.map((todo, index) =>
            <li key={index}>{todo}
            <span onClick={() =>dispatch(deleteTodo(index))}>&times;</span>
            </li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
