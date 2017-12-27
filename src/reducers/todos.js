import { CONECTION_START, CONECTION_ERROR, RECEIVE_TODOS, ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO } from './../actions';

const initialState = {
  connecting: false,
  success: false,
  todos: [],
  error: null
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => action.payload !== todo.id)
      }
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.payload.id) ? action.payload : todo
        )
      }
    case CONECTION_START:
      return {...state, connecting: true, success: false}
    case CONECTION_ERROR:
      return {...state, connecting: false, success: false, error: action.payload}
    case RECEIVE_TODOS:
      return {
        ...state,
        connecting: false,
        success: true,
        todos: action.payload
      }
    default:
      return state;
  }
}

export default todos;
