import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addRegister } from '../redux/actions';
import styles from './Register.module.css';
import Input from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Title';
import MyLink from '../components/MyLink';
import LoginNotFound from '../components/LoginNotFound';
import { showMessage } from '../utils/showMessage';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };

    this.handleClickRegister = this.handleClickRegister.bind(this);
  }

  handleClickRegister(e) {
    e.preventDefault();
    const { name, age, email } = this.state;
    const { dispatch } = this.props;
    dispatch(addRegister({ name, age, email }));
    showMessage('Cliente cadastrado com sucesso! :D');
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <LoginNotFound />;
    return (
      <section className={ styles.register }>
        <Title title="Cadastro de Clientes" />
        <form onSubmit={ this.handleClickRegister }>
          <Input
            type="text"
            placeholder="Nome"
            data-testid="input-register-nome"
            required
            value={ name }
            onChange={ (e) => this.setState({ name: e.target.value }) }
          />
          <Input
            type="number"
            placeholder="Idade"
            data-testid="input-register-idade"
            required
            value={ age }
            onChange={ (e) => this.setState({ age: e.target.value }) }
          />
          <Input
            type="email"
            placeholder="Email"
            data-testid="input-register-email"
            required
            value={ email }
            onChange={ (e) => this.setState({ email: e.target.value }) }
          />
          <Button
            type="submit"
          >
            Registrar Cliente
          </Button>
        </form>
        <MyLink to="/customers">Ver usuários cadastrados</MyLink>
        <MyLink to="/about">Perfil</MyLink>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.login,
});

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userLogin: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
};

Register.defaultProps = {
  userLogin: {},
};

export default connect(mapStateToProps)(Register);
