export const CONECTION_START = 'CONECTION_START';
export const CONECTION_ERROR = 'CONECTION_ERROR';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const conectionStart = () => ({
  type: CONECTION_START
});

export const conectionError = payload => ({
  type: CONECTION_ERROR,
  payload
});

export const receiveTodos = payload => ({
  type: RECEIVE_TODOS,
  payload
});

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const removeTodo = payload => ({
  type: REMOVE_TODO,
  payload
});

export const editTodo = payload => ({
  type: EDIT_TODO,
  payload
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
