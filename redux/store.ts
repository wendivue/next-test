import { createStore, combineReducers } from 'redux';

import { todo } from './Todo/reducers';

const todoApp = combineReducers({ todo });

const store = createStore(todoApp);

export { store };
