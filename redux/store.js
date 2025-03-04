import {configureStore} from '@reduxjs/toolkit';
import permissionsReducer from './slice/permissionsSlice';

export const store = configureStore({
  reducer: {
    permissions: permissionsReducer,
  },
});
