import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { conectionStart, conectionError, editTodo } from './../actions';

class EditTodo extends Component{

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      inputs: this.props.todo
    });
  }

  onChange(inputs) {
    this.setState({
      inputs: Object.assign({}, this.state.inputs, inputs)
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.inputs);
    this.props.dispatch(conectionStart());
    axios.put('https://salesforce-realtime-db.herokuapp.com/rest/V1/tasks', this.state.inputs)
      .then(response => this.props.dispatch(editTodo(response.data[0])))
      .catch(error => this.props.dispatch(conectionError(error.message)));
    this.props.toggleEditModeHandler();
  }

  render() {
    return (
      <li className="col s12 m7">          
        <div className="card">
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title grey-text text-darken-4">
                <input placeholder="Título"
                        value={this.state.inputs.subject}
                        onChange={e => this.onChange({subject: e.currentTarget.value})}
                        id="subject" 
                        type="text" />
              </span>
              <p>
                <input placeholder="Descripción"
                    value={this.state.inputs.description}
                    onChange={e => this.onChange({description: e.currentTarget.value})}
                    id="description"
                    type="text" />
              </p>
            </div>
            <div className="card-action">
              <a href="#" onClick={this.onSubmit}>Guardar</a>
              <a href="#" onClick={this.props.toggleEditModeHandler}>Cancelar</a>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

EditTodo = connect()(EditTodo);

export default EditTodo;
