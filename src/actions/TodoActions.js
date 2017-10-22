import TodoConstants from '../constants/TodoConstants';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

const TodoActions = {
  createItem(item){
    TodoDispatcher.handleAction({
      actionType:TodoConstants.CREATE,
      data:item
    })
  },
  deleteItem(id){
    TodoDispatcher.handleAction({
      actionType:TodoConstants.DELETE,
      data:id
    });
  },
  toggleComplete(id){
    TodoDispatcher.handleAction({
      actionType:TodoConstants.TOGGLE_COMPLETE,
      data:id
    })
  },
  // 将所有的项目设置为已经完成
  toggleCompleteAll(){
    TodoDispatcher.handleAction({
      actionType:TodoConstants.TOGGLE_COMPLETE_ALL,
    })
  },
  // 更新某个todoitem
  updateItem(id,value){
    TodoDispatcher.handleAction({
      actionType:TodoConstants.UPDATE,
      data:{id:id,value:value}
    })
  }
}


export default TodoActions;