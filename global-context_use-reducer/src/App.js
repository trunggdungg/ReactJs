import './App.css';
import { useStore, actions } from './store';
import { useRef } from 'react';
import { removeTodo } from './store/action';
function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const inputRef = useRef();

  const handleSummit = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(''));
    inputRef.current.focus();
  }


  console.log(todoInput)
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <input ref={inputRef} value={todoInput} placeholder='Add a new todo' onChange={e => {
          dispatch(actions.setTodoInput(e.target.value));
        }}></input>
        <br></br>
        <button onClick={handleSummit}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}
              <span onClick={() => dispatch(removeTodo(index))}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
