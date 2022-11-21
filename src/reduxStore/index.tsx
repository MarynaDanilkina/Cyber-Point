import userReducer from './Reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: userReducer,
});

export default store;
