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

  const [filter, setFilter] = useState('');

  const formSubmitHandler = newContact => {
    setContacts(() => [...contacts, newContact]);
  };

  const checkUniqueContactHandler = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    !!isExistContact && alert(`${name} is alredy in contacts`);
  };

  const filterChangeHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const contactRemoveHandler = id =>
    setContacts(prevState => prevState.filter(contact => contact.id !== id));

  const getVisibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={formSubmitHandler}
        onCheckUnique={checkUniqueContactHandler}
      />
      <h2>Contacts</h2>
      <Filter onChangeFilter={filterChangeHandler} />

      <ContactsList
        contacts={getVisibleContacts}
        onRemove={contactRemoveHandler}
      />
    </div>
  );
}

export default App;
