import React from 'react';

class TodoFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-12 col-xs-12 todo-footer-container">
        <div className="col-md-3 col-xs-4 text-left ">
          <span className='left-text'>{this.props.count} Items Left</span>
        </div>
        <div className="col-md-9 col-xs-8">
          
        </div>
      </div>
    );
  }
}

export default TodoFooter;