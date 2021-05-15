import { ActionsTodo, AddState } from './model';

const defaultTodo = [{ text: 'First text' }, { text: 'Second text' }, { text: 'Third text' }];

const todo = (state = defaultTodo, action: ActionsTodo): AddState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.payload }];
    case 'REMOVE_TODO': {
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    }

    default:
      return state;
  }
};

export { todo };
