/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import TrybeLogo from '../assets/logo.svg';
import ToggleButtonImage from '../assets/list.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <button className="toggle-button" type="button">
          <img src={ ToggleButtonImage } alt="Toggle sidebar button" />
        </button>
        <img src={ TrybeLogo } alt="Trybe Logo" />
      </header>
    );
  }
}

export default Header;
