// *toolkit

import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add', (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));
export const deleteContact = createAction('contact/delete');
export const filterContacts = createAction(`contact/filter`);

// *basic
// import types from './phonebook-types';

// export const addContact = (name, number) => ({ 
//   type: types.ADD_CONTACT,
//   payload: { id: uuidv4(), name, number },
// });

// export const deleteContact = payload => ({
//   type: types.DELETE_CONTACT,
//   payload,
// });

// export const filterContacts = name => ({
//   type: types.FILTER_CONTACTS,
//   payload: name,
// });
