import React, { Component } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

class Header extends Component {
  render() {
    const { changeTheme, theme } = this.props;
    return (
      <header>
        <div
          className="theme"
          onClick={ () => changeTheme(!theme) }
          role="presentation"
        >
          { theme
            ? <BsSunFill style={ { color: 'yellow' } } />
            : <BsMoonFill />}
        </div>
      </header>
    );
  }
}

export default Header;
