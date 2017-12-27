import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO } from './../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.todo
      ];
    case REMOVE_TODO:
      return state.filter(todo => action.id !== todo.id);
    case EDIT_TODO:
      return state.map(todo =>
        (todo.id === action.todo.id) ? action.todo : todo
      );
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state;
  }
}

export default todos;
