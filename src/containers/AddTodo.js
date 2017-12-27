import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

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
        id: '',
        subject: '',
        description: '',
        completed: false
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
    this.props.dispatch(addTodo(this.state.inputs));
    this.setState({inputs: this.initState().inputs})
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
