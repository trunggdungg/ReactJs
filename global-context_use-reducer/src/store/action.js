import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO } from './constants';

export const setTodoInput = (input) => ({
    type: SET_TODO_INPUT,
    payload: input,
});

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});
// xóa 
export const removeTodo = (index) => ({
    type: REMOVE_TODO,
    payload: index,
});