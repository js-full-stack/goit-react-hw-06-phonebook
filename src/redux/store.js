import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from '../redux/phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  contactsReducer,
});
console.log(process.env.NODE_ENV);
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'production' && true,
});

export default store;
