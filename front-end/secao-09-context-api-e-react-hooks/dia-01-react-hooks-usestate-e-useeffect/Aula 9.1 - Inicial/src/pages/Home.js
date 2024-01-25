import React, { Component } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="App__Menu">
          <div className="App__ContentMenuItems">
            <img
              className="App__UserPhoto"
              src="https://avatars.githubusercontent.com/u/59292088?v=4"
              alt="Imagem do usuário"
            />
            <h3>Nome do Usuário</h3>
            {' '}
            <Link to="/">
              (
              {' '}
              Logout
              {' '}
              )
            </Link>

          </div>
        </div>
        <h1>Repositórios</h1>
      </div>
    );
  }
}

export default Home;
