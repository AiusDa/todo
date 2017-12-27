import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditTodo from './../containers/EditTodo';
import RemoveTodo from './../containers/RemoveTodo';
import ToggleTodo from './../containers/ToggleTodo';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.toggleEditModeHandler = this.toggleEditModeHandler.bind(this);
  }

  componentWillMount() {
    this.setState({
      editMode: false
    });
  }

  toggleEditModeHandler() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    if(this.state.editMode === false) {
      return (
        <li className="col s12 m7">          
          <div className="card">
            <div className="card-stacked">
              <div className="card-content">
                <span className="card-title grey-text text-darken-4">
                  <ToggleTodo todo={this.props.todo} />
                  <label htmlFor={`${this.props.todo.id}-completed`}>{this.props.todo.subject}</label>
                </span>
                <p>{this.props.todo.description}</p>
              </div>
              <div className="card-action">
                <a href="#" onClick={this.toggleEditModeHandler}>Editar</a>
                <RemoveTodo id={this.props.todo.id} />
              </div>
            </div>
          </div>
        </li>
      );
    } else {
      return <EditTodo todo={this.props.todo} toggleEditModeHandler={this.toggleEditModeHandler}/>;
    }
  }

}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
}

export default Todo;
