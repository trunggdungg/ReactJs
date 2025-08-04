import { SET_TODO,ADD_TODO,DELETE_TODO } from "./constants";

export const initialState = {
    todo: '',
    todos: []
}

export const reducer = (state, action) =>{
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
    
        case DELETE_TODO:
            const newTodos = state.todos.filter((_, index) => index !== action.payload);
            return {
                ...state,
                todos: newTodos
            }
        default:
            break;
    }
}

export default reducer;