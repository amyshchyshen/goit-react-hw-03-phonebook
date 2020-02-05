import React from 'react';
import T from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, handleChangeFilter }) => {
  return (
    <input
      className={styles.search}
      type="text"
      value={value}
      onChange={handleChangeFilter}
      placeholder="Find contact..."
    />
  );
};

Filter.propTypes = {
  value: T.string.isRequired,
  handleChangeFilter: T.func.isRequired,
};

export default Filter;
