import React from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const props = { color: 'yellow' };

function Header({ handleChangeTheme, isDarkTheme }) {
  return (
    <header>
      <div
        className="theme"
        onClick={ handleChangeTheme }
        role="presentation"
      >
        { isDarkTheme
          ? <BsSunFill { ...props } />
          : <BsMoonFill />}
      </div>
    </header>
  );
}

export default Header;
