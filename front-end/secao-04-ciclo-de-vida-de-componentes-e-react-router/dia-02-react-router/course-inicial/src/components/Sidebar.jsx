import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { IoHomeOutline } from 'react-icons/io5';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { BsPlayCircle } from 'react-icons/bs';

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="Sidebar">
        <a href="/">
          <IoHomeOutline />
          Home
        </a>
        <Link to="/content">
          <HiOutlineNewspaper />
          Conteúdo
        </Link>
        <Link to="/live-lectures">
          <BsPlayCircle />
          Gravações
        </Link>
      </nav>
    );
  }
}

export default Sidebar;
