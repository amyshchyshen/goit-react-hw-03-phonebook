import React from 'react';
import T from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ name, number, handleDeleteContact }) => (
  <div className={styles.contactWrap}>
    <p className={styles.contact}>
      <span className={styles.name}>{name}</span>:{' '}
      <span className={styles.number}>{number}</span>
    </p>
    <button
      className={styles.deleteBtn}
      type="button"
      onClick={handleDeleteContact}
    >
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: T.string.isRequired,
  number: T.string.isRequired,
  handleDeleteContact: T.func.isRequired,
};

export default Contact;
