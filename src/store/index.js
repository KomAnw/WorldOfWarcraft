import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { tokenReducer } from './CommonSlice/apiSlice';

const reducer = combineReducers({
  tokenReducer,
});

const store = configureStore({
  reducer,
});
export default store;
