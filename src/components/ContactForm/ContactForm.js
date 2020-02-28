import React, { Component } from 'react';
import T from 'prop-types';
import constants from './constants';
import styles from './ContactForm.module.css';

const INIT_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    handleAddContact: T.func.isRequired,
  };

  state = { ...INIT_STATE };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { handleAddContact } = this.props;
    handleAddContact(name, number);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INIT_STATE });
  };

  render() {
    const { name, number } = this.state;
    const { nameId, numberId } = constants;

    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label htmlFor={nameId} className={styles.label}>
          <span className={styles.inputName}>Enter name:</span>
          <input
            id={nameId}
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={numberId} className={styles.label}>
          <span className={styles.inputName}>Enter number:</span>
          <input
            id={numberId}
            className={styles.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={styles.submitBtn}>
          Save contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
