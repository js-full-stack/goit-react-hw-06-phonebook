import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter/';

import { useState, useEffect } from 'react';
import ContactsList from './Components/ContactsList';

function App() {
  const [contacts, setContacts] = useState([]);

  // *did-mount
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts([...parsedContacts]);
    }
  }, []);

  // *did-update
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

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
