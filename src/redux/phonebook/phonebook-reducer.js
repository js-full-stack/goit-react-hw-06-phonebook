import { combineReducers } from 'redux';
import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: {
    items: [
      {
        id: uuidv4(),
        name: '',
        number: '',
      },
    ],
    filter: '',
  },
};

const items = (state = initialState.contacts.items, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

export default combineReducers({
  items,
});
