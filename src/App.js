import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter/';

import { useState, useEffect } from 'react';
import ContactsList from './Components/ContactsList';

function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <ContactsList />
    </div>
  );
}

export default App;
