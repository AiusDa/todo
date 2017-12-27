import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { conectionStart, conectionError, addTodo } from './../actions';

class AddTodo extends Component{

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      inputs: this.initState().inputs
    });
  }

  initState() {
    return {
      inputs: {
        subject: '',
        description: ''
      }
    }
  }

  onChange(inputs) {
    this.setState({
      inputs: Object.assign({}, this.state.inputs, inputs)
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(conectionStart());
    axios.post('https://salesforce-realtime-db.herokuapp.com/rest/V1/tasks', this.state.inputs)
      .then(response => {
        this.props.dispatch(addTodo({...response.data[0], isclosed: false}));
      })
      .catch(error => {
        this.props.dispatch(conectionError(error.message));
      });
    this.setState({inputs: this.initState().inputs});
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Título"
                    value={this.state.inputs.subject}
                    onChange={e => this.onChange({subject: e.currentTarget.value})}
                    id="subject" 
                    type="text" 
                    className="validate" />
              <label htmlFor="subject">Título</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Descripción"
                     value={this.state.inputs.description}
                     onChange={e => this.onChange({description: e.currentTarget.value})}
                     id="description"
                     type="text"
                     className="validate" />
              <label htmlFor="description">Descripción</label>
            </div>
          </div>
          <button type="submit" className="btn">Guardar</button>
        </form>
      </div>
    );
  }

}

AddTodo = connect()(AddTodo);

export default AddTodo;
