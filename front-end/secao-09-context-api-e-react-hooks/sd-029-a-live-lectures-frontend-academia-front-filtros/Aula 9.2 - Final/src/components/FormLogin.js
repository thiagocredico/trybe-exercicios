import React, { useContext, useState } from 'react';
import '../styles/Login.css';
import { useHistory } from 'react-router-dom';
import logo from '../assets/trybe-negativo-preferencial.png';
import { AuthContext } from '../context/AuthProvider';

const mockUser = ['programadorEmerson', 'Willian-Rodrigues', 'MoisesSantana'];
const position = Math.floor(Math.random() * mockUser.length);

function FormLogin() {
  const [login, setLogin] = useState({ username: mockUser[position], password: '1234' });

  const { isLoading, error, handleSignin } = useContext(AuthContext);

  const history = useHistory();

  const isFilled = (login.username && login.password);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignin(login.username);
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
