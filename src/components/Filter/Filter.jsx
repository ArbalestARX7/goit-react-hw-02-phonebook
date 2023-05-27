import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        className={css.filterInput}
      />
    </label>
  );
};

export default Filter;
