import PropTypes from 'prop-types';
import styles from './ContactsList.module.scss';
import sprite from '../sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';

const getContactItem = id => state =>
  state.contactsReducer.items.find(contact => contact.id === id);

const ContactListItem = ({ /* name, number, */ id /* onRemove */ }) => {
  const { name, number } = useSelector(getContactItem(id));
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <span className={styles.textContact}>
        {name} : {number}
      </span>
      <button className={styles.btnDelete} onClick={handleDeleteContact}>
        Delete
        <svg className={styles.iconRemove}>
          <use href={`${sprite}#icon-remove`}></use>
        </svg>
      </button>
    </li>
  );
};

export default ContactListItem;
