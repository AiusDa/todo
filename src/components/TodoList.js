import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onCompleteTodo, onRemove, onEdit }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        todo={todo}
        onCompleteTodo={() => onCompleteTodo(todo.id)}
        onRemove={() => onRemove(todo.id)}
        onEdit={onEdit}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func
}

export default TodoList;
