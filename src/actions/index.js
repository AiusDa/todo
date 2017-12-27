import uuidv4 from 'uuid/v4';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo: Object.assign({}, todo, {id: uuidv4()})
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  todo
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});