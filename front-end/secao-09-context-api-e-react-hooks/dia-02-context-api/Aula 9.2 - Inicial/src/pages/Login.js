import React from 'react';
import '../styles/Login.css';
import FormLogin from '../components/FormLogin';

function Login({ setGitData, history }) {
  return <FormLogin history={ history } setGitData={ setGitData } />;
}

export default Login;
