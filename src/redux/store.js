import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import contactsReducer from '../redux/phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
