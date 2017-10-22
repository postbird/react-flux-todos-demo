import React from 'react';

import TodoItem from './TodoItem';

import TodoAction from '../../actions/TodoActions';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.keydownHandle = this.keydownHandle.bind(this);
  }
  // 按钮点击的删除事件
  deleteItem(id) {
    // 通过 action 触发 dispatcher
    // 这里进行confirm判断
    if (confirm("确定删除？")) {
      TodoAction.deleteItem(id);
    }
  }
  // 按钮的toggle complete事件
  toggleComplete(id){
    // 通过 action 触发 dispatcher
    TodoAction.toggleComplete(id);
  }
  // 通过keydown 13 进行todoitem的更新
  keydownHandle(id,value){
    // 通过action 触发dispacther
    if(value.trim().length === 0){
      alert("不能为空");
      return false;
    }
    TodoAction.updateItem(id,value.trim());
  }
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return <TodoItem key={ index } {...item} deleteClick={ this.deleteItem } toggleClick = {this.toggleComplete} keydown = {this.keydownHandle}></TodoItem>
          })
        }
      </div>
    );
  }
}

export default TodoList;