import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const {
      name,
      email,
      cpf,
      address,
      city,
      resume,
      role,
      description,
      uf,
    } = this.props;
    return (
      <section className="box column is-half is-offset-one-quarter">
        <h1 className="title">Dados Enviados</h1>
        <div>{`Nome: ${name}`}</div>
        <div>{`Email: ${email}`}</div>
        <div>{`CPF: ${cpf}`}</div>
        <div>{`Endereço: ${address}`}</div>
        <div>{`Cidade: ${city}`}</div>
        <div>{`Estado: ${uf}`}</div>
        <div>{`Currículo: ${resume}`}</div>
        <div>{`Cargo: ${role}`}</div>
        <div>{`Descrição do Cargo: ${description}`}</div>
      </section>
    );
  }
}
FormDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.profileReducer.personalData,
  ...state.profileReducer.professionalData,
});

export default connect(mapStateToProps)(FormDisplay);
