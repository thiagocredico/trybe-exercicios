import React from 'react';
import styles from './Button.module.css';

function Button({
  type = 'button',
  onClick = () => {},
  className = '',
  datatestid,
  children,
}) {
  return (
    <button
      className={ `${styles.button} ${className}` }
      type={ type }
      data-testid={ datatestid }
      onClick={ onClick }
    >
      {children}
    </button>
  );
}

export default Button;
