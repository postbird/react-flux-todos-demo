import React, { Component } from 'react';

import '../../stylesheets/scss/todo.scss';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

import TodoStore from '../../stores/TodoStores';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: TodoStore.getTodoList(),
      leftItems: TodoStore.getLeftItems(),
      completed: TodoStore.getAllCompleted()
    }
    this._onChange = this._onChange.bind(this);
  }
  // 组件挂在前 将事件进行监听
  componentWillMount() {
    // 将 action的create 添加到store的event中
    TodoStore.addChangeListener(this._onChange);
  }
  // 组件销毁前 撤销事件的监听
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }
  // 生成某一个主要的
  _onChange() {
    this.setState({
      list: TodoStore.getTodoList(),
      leftItems: TodoStore.getLeftItems(),
      completed: TodoStore.getAllCompleted()
    });
  }
  render() {
    const styles = {
      container: {
        width: '700px',
        maxWidth: '100%'
      }
    }
    return (
      <div className="container" style={ styles.container }>
        <div className="row">
          <TodoHeader completed={ this.state.completed }></TodoHeader>
          <TodoList list={ this.state.list }></TodoList>
          <TodoFooter count={ this.state.leftItems } ></TodoFooter>
        </div>
      </div>
    )
  }
}
export default TodoApp;