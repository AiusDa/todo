import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import Todo from './Todo';

const SortableItem = SortableElement(({todo}) =>
  <Todo todo={todo} />
);

const TodoList = SortableContainer(({todos}) => (
  <ul>
    {todos.map((todo, index) =>
      <SortableItem 
        key={`item-${index}`}
        index={index}
        todo={todo} 
      />
    )}
  </ul>
));

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired).isRequired
}

TodoList.defaultProps = {
  axis: 'y',
  transitionDuration: 300,
  pressDelay: 0,
  pressThreshold: 5,
  distance: 0,
  useWindowAsScrollContainer: false,
  hideSortableGhost: true,
  shouldCancelStart: function(e) {
    // Cancel sorting if the event target is an `input`, `textarea`, `select` or `option`
    const disabledElements = ['input', 'textarea', 'select', 'option', 'button', 'a', 'label'];

    if (disabledElements.indexOf(e.target.tagName.toLowerCase()) !== -1) {
      return true; // Return true to cancel sorting
    }
  },
  lockToContainerEdges: false,
  lockOffset: '50%',
  getHelperDimensions: ({node}) => ({
    width: node.offsetWidth,
    height: node.offsetHeight,
  }),
};

export default TodoList;
