import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { conectionStart, conectionError, removeTodo } from './../actions';

class RemoveTodo extends Component {

  constructor(props){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo() {
    this.props.dispatch(conectionStart());
    axios.delete(`https://salesforce-realtime-db.herokuapp.com/rest/V1/tasks/${this.props.id}`)
      .then(response => this.props.dispatch(removeTodo(this.props.id)))
      .catch(error => this.props.dispatch(conectionError(error.message)));
  }

  render() {
    return <a href="#" onClick={this.removeTodo}>Eliminar</a>
  }

}

RemoveTodo = connect()(RemoveTodo);

export default RemoveTodo;
