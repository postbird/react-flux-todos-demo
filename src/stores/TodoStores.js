import { EventEmitter } from 'events';

import TodoConstants from '../constants/TodoConstants';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

const CHANGE_EVENT = 'change';

const _store = {
  todoList: [
    { id: 0, text: 'AAAAAAAAAA', complete: true },
    { id: 1, text: 'BBBBBBBBBB', complete: false },
    { id: 2, text: 'CCCCCCCCCC', complete: true },
    { id: 3, text: 'DDDDDDDDDD', complete: false },
    { id: 4, text: 'EEEEEEEEEE', complete: false },
    { id: 5, text: 'FFFFFFFFFF', complete: true },
  ]
};

// 增加 todo item
const createItem = function (item) {
  // 生成一个随机的id
  var id = Number.parseInt(Math.random() * 1000000);
  const todoItem = {
    id: id,
    text: item,
    complete: false
  };
  // 前置放入数组
  _store.todoList.unshift(todoItem);
}
// 获取todo list
const getTodoList = function () {
  return _store.todoList;
}
// 更改是否完成的状态 toggle
const toggleComplete = function (id) {
  for (let i = 0, len = _store.todoList.length; i < len; i++) {
    if (_store.todoList[i].id === Number.parseInt(id)) {
      _store.todoList[i].complete = !_store.todoList[i].complete;
      break;
    }
  }
}
// 删除某个todoItem
const deleteItem = function (id) {
  for (let i = 0, len = _store.todoList.length; i < len; i++) {
    if (_store.todoList[i].id === Number.parseInt(id)) {
      _store.todoList.splice(i, 1);
      break;
    }
  }
}
// 获取剩下的未做的 todoItem
const getLeftItems = function (id) {
  let count = 0;
  _store.todoList.forEach((item, index) => {
    if (!item.complete) {
      count++;
    }
  });
  return count;
}
// toggle complete 
const toggleCompleteAll = function () {
  let complete = _store.todoList[0].complete ? false : true;
  _store.todoList.forEach((item, index) => {
    item.complete = complete;
  });
}
// 是否全部完成的flag
const getAllCompleted = function () {
  var complete = true;
  for (let i = 0, len = _store.todoList.length; i < len; i++) {
    if (!_store.todoList[i].complete) {
      // 如果存在未完成的
      complete = false;
      break;
    }
  }
  return complete;
}
// 更新某个item
const updateItem = function(id,value){
  for (let i = 0, len = _store.todoList.length; i < len; i++) {
    if (_store.todoList[i].id == id) {
      _store.todoList[i].text = value.trim();
      break;
    }
  }
}

// 构造 todoStore
const TodoStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getTodoList: getTodoList,
  getLeftItems: getLeftItems,
  getAllCompleted: getAllCompleted
});

// 注册 Dispatcher
TodoDispatcher.register((payload) => {
  const action = payload.action;
  switch (action.actionType) {
    // create 事件
    case TodoConstants.CREATE:
      createItem(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    // delete 事件
    case TodoConstants.DELETE:
      deleteItem(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    // toggle complete 事件
    case TodoConstants.TOGGLE_COMPLETE:
      toggleComplete(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    // toggle all
    case TodoConstants.TOGGLE_COMPLETE_ALL:
      toggleCompleteAll(action.data);
      TodoStore.emit(CHANGE_EVENT);
      break;
    case TodoConstants.UPDATE:
      updateItem(action.data.id,action.data.value);
      TodoStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
      break;
  }
});

export default TodoStore;