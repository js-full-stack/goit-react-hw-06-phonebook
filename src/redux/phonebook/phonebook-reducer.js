import { addContact, deleteContact, filterContacts } from './phonebook-actions';
import { combineReducers, createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const items = createReducer(initialState.contacts.items, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
 
const filter = createReducer(initialState.contacts.filter, {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// *basic
// const items = (state = initialState.contacts.items, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];

//     case types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = initialState.contacts.filter, actions) => {
//   const { type, payload } = actions;
//   switch (type) {
//     case types.FILTER_CONTACTS:
//       return payload;
//     default:
//       return state;
//   }
// };
