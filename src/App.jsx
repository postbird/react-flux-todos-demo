import React, { Component } from 'react';

import logoSrc from './stylesheets/images/logo.svg'

// import Hello from './components/Hello';

import TodoApp from './components/todoComponents/TodoApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoStyle: {
        width: '100px'
      },
      divStyle: {
        textAlign: "center"
      },
    }
  }
  render() {
    return (
      <div style={ this.state.divStyle }>
        <h1><img src={ logoSrc } alt="logo" style={ this.state.logoStyle } /></h1>
        <TodoApp />
      </div>
    )
  }
}
export default App;