/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomersList from '../components/CustomersList';
import { deleteRegister as deleteCustomerAction } from '../redux/actions';
import MyLink from '../components/MyLink';
import Title from '../components/Title';
import LoginNotFound from '../components/LoginNotFound';
import { showMessage } from '../utils/showMessage';

class Customers extends React.Component {
  handleDeleteCustomer = (e) => {
    const { dispatch } = this.props;
    const answer = confirm('Tem certeza que deseja deletar?');

    if (answer) {
      dispatch(deleteCustomerAction(e));
      showMessage('Cliente deletado com sucesso! :D');
    }
  };

  render() {
    const { customers, userLogin } = this.props;
    if (!userLogin.email) return <LoginNotFound />;
    if (!customers.length) {
      return (
        <section>
          <Title title="Nenhum cliente cadastrado" />
          <MyLink to="/register">Cadastre agora!</MyLink>
          <MyLink to="/about">Perfil</MyLink>
        </section>
      );
    }
    return (
      <section>
        <MyLink to="/register">
          Cadastre outros!
        </MyLink>
        <CustomersList
          customers={ customers }
          deleteCustomer={ this.handleDeleteCustomer }
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers,
  userLogin: state.login,
});

Customers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userLogin: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  customers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Customers);
