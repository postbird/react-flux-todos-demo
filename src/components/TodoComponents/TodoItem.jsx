import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.id,
      spanShow:{
        display:'block'
      },
      inputShow:{
        display:'none'
      }
    }
    this.deleteClickHandle = this.deleteClickHandle.bind(this);
    this.toggleClickHandle = this.toggleClickHandle.bind(this);
    this.spanShowHandle = this.spanShowHandle.bind(this);
    this.keydownCodeHandle = this.keydownCodeHandle.bind(this);
  }
  // 这是 todoItem 组件的click事件
  // 但是实际上触发的还是 从 TodoList 传过来的 click处理方法
  // 不同点在于 可以将自身的 itemId 进行函数参数的传值
  deleteClickHandle(event) {
    // 通过 ref 指向dom并且赋予 value属性 通过value=id来进行删除操作
    const id = Number.parseInt(this.refs.itemContainer.getAttribute("value"));
    // 从子组件触发父组件的delete事件 
    this.props.deleteClick(id);
  }
  // toggle complete 
  // 触发 toggle complete 事件
  toggleClickHandle(event) {
    const id = Number.parseInt(this.refs.itemContainer.getAttribute("value"));
    this.props.toggleClick(id);
  }
  // toggle显示span和input 用于更新
  spanShowHandle(event){
    this.setState({
      spanShow:{
        display:'none'
      },
      inputShow:{
        display:'block'
      }
    });
    
  }
  // 回车更新
  keydownCodeHandle (event){
    if(event.keyCode === 13){
      const id = Number.parseInt(this.refs.itemContainer.getAttribute("value"));
      const value = event.target.value;
      // 修改完成后 更新显示的方式
      this.setState({
      spanShow:{
        display:'block'
      },
      inputShow:{
        display:'none'
      }
    });
      if(value.trim().length === 0){
        alert("不能为空");
        // 不能为空 需要修复已经修改的input值
        event.target.value = this.props.text;
        return false;
      }
      // 通过props调用父组件的方法
      this.props.keydown(id,value);
      
    }
  }
  render() {
    const iconColor = {
      ok: '#12bb2e',
    }
    var iconStyle = {};
    if (this.props.complete) {
      iconStyle = {
        color: iconColor.ok
      }
    }

    return (
      <div className="col-md-12 col-xs-12 todo-item-container" ref="itemContainer" value={ this.props.id }>
        <div className="col-md-2 col-xs-4 icon-box">
          <span className="glyphicon glyphicon-ok" style={ iconStyle } onClick={ this.toggleClickHandle } ></span>
        </div>
        <div className="col-md-9 col-xs-6 text-left item-text-box">
          <span style={this.state.spanShow} onClick = {this.spanShowHandle}>{ this.props.text }</span>
          <input style={this.state.inputShow} type="text" placeholder="不能为空" defaultValue={ this.props.text } className="form-control" onKeyDown = {this.keydownCodeHandle}/>
        </div>
        <div className="col-md-1 col-xs-2 text-right">
          <span className="glyphicon glyphicon-remove icon-remove" onClick={ this.deleteClickHandle }></span>
        </div>
      </div>
    );
  }
}
export default TodoItem;