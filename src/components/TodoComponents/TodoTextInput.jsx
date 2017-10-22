import React, { Component } from 'react';

class TodoTextInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input type="text" className="form-control" ref = {this.props.refName}placeholder={ this.props.placeholder } defaultValue={ this.props.val } onChange = {this.props.change} />
    );
  }
}

export default TodoTextInput;