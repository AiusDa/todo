import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { conectionStart, conectionError, editTodo } from './../actions';

class ToggleTodo extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      checked: this.props.todo.status
    });
  }

  onChange() {
    this.props.dispatch(conectionStart());
    axios.put('https://salesforce-realtime-db.herokuapp.com/rest/V1/tasks', {
        ...this.props.todo,
        status: (this.props.todo.status === 'Completed') ? 'In Progress' : 'Completed'
    })
      .then(response => this.props.dispatch(editTodo(response.data[0])))
      .catch(error => this.props.dispatch(conectionError(error.message)));
  }

  render() {
    return <input type="checkbox" 
                  id={`${this.props.todo.id}-completed`} 
                  checked={this.props.todo.status === 'Completed'}
                  onChange={this.onChange} />
  }

}

ToggleTodo = connect()(ToggleTodo);

export default ToggleTodo;
