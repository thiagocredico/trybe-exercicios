import React, { Component } from 'react';
import '../styles/Login.css';
import logo from '../assets/trybe-negativo-preferencial.png';

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  render() {
    return (
      <div className="Login">
        <div className="Login__Container">
          <img src={ logo } alt="logo trybe" width="120" />
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="username"
              />
            </label>

            <label htmlFor="password" id="password">
              <input
                type="password"
                placeholder="password"
                name="password"
              />
            </label>

            <button
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
