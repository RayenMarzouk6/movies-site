import { thunk } from 'redux-thunk';
// import thunk from 'redux-thunk'; // Import thunk

import { applyMiddleware, createStore } from 'redux';
import { moviesReducer } from '../reducer/moviesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// 1- Create Store:
export const store = createStore(
  moviesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

