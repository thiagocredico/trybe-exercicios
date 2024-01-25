import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../assets/trybe-negativo-preferencial.png';

const INITIAL_STATE = { username: 'programadorEmerson', password: '' };

function Login({ history, setGitData }) {
  const [login, setLogin] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const translateError = (errorType) => {
    switch (errorType) {
    case 'Not Found':
      return 'Usuário não encontrado';
    case 'Bad credentials':
      return 'Usuário ou senha inválidos';
    default:
      return 'Erro desconhecido';
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const data = await fetch(`https://api.github.com/users/${login.username}`);
      if (!data.ok) {
        const newError = await data.json();
        throw newError.message;
      }

      const userData = await data.json();
      setGitData(userData);
    } catch (e) {
      setLogin(INITIAL_STATE);
      setError(translateError(e));
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetchData();
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
            {error && <small style={ { color: 'red' } }>{error}</small>}
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
            disabled={ isLoading }
          >
            {isLoading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
