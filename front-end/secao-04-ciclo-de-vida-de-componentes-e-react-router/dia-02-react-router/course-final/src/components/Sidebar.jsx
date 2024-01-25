import React from 'react';
import './Sidebar.css';
import { IoHomeOutline } from 'react-icons/io5';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { BsPlayCircle, BsFillHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="Sidebar">
        <Link to="/">
          <IoHomeOutline />
          Home
        </Link>
        <Link to="/content">
          <HiOutlineNewspaper />
          Conteúdo
        </Link>
        <Link to="/live-lectures">
          <BsPlayCircle />
          Gravações
        </Link>
        <Link to="/favorites">
          <BsFillHeartFill />
          Favoritos
        </Link>
      </nav>
    );
  }
}

export default Sidebar;
