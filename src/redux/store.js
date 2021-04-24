import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from '../redux/phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
