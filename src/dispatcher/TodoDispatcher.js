import { Dispatcher } from 'flux';

const TodoDispatcher = new Dispatcher();

TodoDispatcher.handleAction = function (action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};
export default TodoDispatcher;

