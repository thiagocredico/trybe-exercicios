import React from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function Header({ changeTheme, theme }) {
  return (
    <header>
      <div
        className="theme"
        onClick={ () => changeTheme((prevTheme) => !prevTheme) }
        role="presentation"
      >
        { theme
          ? <BsSunFill style={ { color: 'yellow' } } />
          : <BsMoonFill />}
      </div>
    </header>
  );
}

export default Header;
