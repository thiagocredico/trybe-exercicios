import React, { useContext } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import AppContext from '../context/AppContext';

const props = { color: 'yellow' };

function Header() {
  const { handleChangeTheme, isDarkTheme } = useContext(AppContext);

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
