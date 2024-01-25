import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MyLink.module.css';

function MyLink({ to, children }) {
  return (
    <div className={ styles.link }>
      <Link to={ to }>{children}</Link>
    </div>
  );
}

export default MyLink;
