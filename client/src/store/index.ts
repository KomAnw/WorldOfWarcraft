import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authApi } from 'api/AuthApi';
import { classesApi } from 'api/ClassesApi';
import { classesInfoApi } from 'api/ClassesInfoApi';

const reducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [classesApi.reducerPath]: classesApi.reducer,
  [classesInfoApi.reducerPath]: classesInfoApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      classesApi.middleware,
      classesInfoApi.middleware
    ),
});

export default store;
