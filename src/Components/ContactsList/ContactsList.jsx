import styles from './ContactsList.module.scss';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

import { useSelector } from 'react-redux';

const getContacts = state => state.contactsReducer.items;
const ContactsList = ({ contacts, onRemove }) => {
  const contactsList = useSelector(getContacts);
  return (
    contacts.length > 0 && (
      <>
        <ul className={styles.contacts}>
          {contactsList.map(({ name, number, id }) => (
            <ContactListItem
              key={id}
              id={id}
              // name={name}
              // number={number}
              onRemove={() => onRemove(id)}
            />
          ))}
        </ul>
      </>
    )
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
