import { SET_TODO_INPUT,ADD_TODO ,REMOVE_TODO} from "./constants";

const initialState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
            // xóa theo splice
        case REMOVE_TODO:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodos
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export { initialState }
export default reducer