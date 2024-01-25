import React from 'react';
import styles from './Input.module.css';

function Input({
  type,
  placeholder,
  datatestid,
  required = false,
  value,
  onChange,
}) {
  return (
    <input
      className={ styles.input }
      type={ type }
      placeholder={ placeholder }
      data-testid={ datatestid }
      required={ required }
      value={ value }
      onChange={ onChange }
    />
  );
}

export default Input;
