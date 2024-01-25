import React, { useState } from 'react';
import logo from '../assets/trybe-negativo-preferencial.png';

import '../styles/Login.css';

function FormLogin({ setGitData, history }) {
  const [login, setLogin] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isFilled = (login.username && login.password);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const fetchData = async (username) => {
    try {
      setIsLoading(true);
      const data = await fetch(`https://api.github.com/users/${username}`);
      if (!data.ok) {
        const newError = await data.json();
        throw new Error(newError.message);
      }

      const success = await data.json();
      setGitData(success);
    } catch (e) {
      setError(e);
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(login.username);
    history.push('/home');
  };

  return (
    <div className="Login">
      <div className="Login__Container">
        <img src={ logo } alt="logo trybe" width="120" />
        <form onSubmit={ handleSubmit }>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={ login.username }
              onChange={ handleChange }
            />
            { error
            && <small style={ { color: 'red' } }>{error.message}</small>}
          </label>
          <label htmlFor="password" id="password">
            <input
              type="password"
              placeholder="password"
              value={ login.password }
              onChange={ handleChange }
              name="password"
            />
          </label>

          <button
            type="submit"
            disabled={ !isFilled || isLoading }
          >
            {isLoading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
