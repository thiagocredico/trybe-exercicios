import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login as loginAction } from '../redux/actions';
import Input from '../components/Input';
import Button from '../components/Button';
import styles from './Login.module.css';
import Title from '../components/Title';
import { showMessage } from '../utils/showMessage';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    dispatch(loginAction({ email, password }));
    showMessage('Login efetuado com sucesso! :D');
    history.push('/customers');
  };

  render() {
    return (
      <form className={ styles.login } onSubmit={ this.handleLogin }>
        <Title title="Login" />
        <Input
          type="email"
          onChange={ (e) => this.setState({ email: e.target.value }) }
          placeholder="E-mail"
          data-testid="input-email"
          required
        />
        <Input
          type="password"
          onChange={ (e) => this.setState({ password: e.target.value }) }
          placeholder="Senha"
          data-testid="input-password"
          required
        />
        <Button type="submit" datatestid="btn-login">
          Entrar
        </Button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
