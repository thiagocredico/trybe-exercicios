import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/comments">Comentários</Link>
        </li>
      </ul>
    </nav>
  );
}
