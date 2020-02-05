import React from 'react';
import T from 'prop-types';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, handleDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <li key={contact.id}>
        <Contact
          name={contact.name}
          number={contact.number}
          handleDeleteContact={() => handleDeleteContact(contact.id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      id: T.string,
      name: T.string,
      number: T.string,
    }).isRequired,
  ).isRequired,
  handleDeleteContact: T.func.isRequired,
};

export default ContactList;
