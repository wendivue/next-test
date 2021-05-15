import { SetTodoData, RemoveTodoData } from './model';

const addTodo = (todo: string): SetTodoData => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

const removeTodo = (index: number): RemoveTodoData => {
  return {
    type: 'REMOVE_TODO',
    payload: index,
  };
};

export { addTodo, removeTodo };
