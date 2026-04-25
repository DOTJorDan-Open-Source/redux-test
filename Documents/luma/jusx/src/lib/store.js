import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './features/uiSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
    },
  });
};