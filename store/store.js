import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./reducerAndAction";

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});