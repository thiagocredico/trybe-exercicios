import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameForm.css';

class GameForm extends Component {
  render() {
    const { handleChange, name, developer, image, sales, handleSubmit } = this.props;

    return (
      <form className="new__game__form" onSubmit={ handleSubmit }>
        <h2>Cadastre um novo jogo</h2>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ handleChange }
          />
        </label>
        <label>
          Desenvolvedora:
          <input
            type="text"
            name="developer"
            value={ developer }
            onChange={ handleChange }
          />
        </label>
        <label>
          Número de vendas:
          <input
            type="number"
            name="sales"
            value={ sales }
            onChange={ handleChange }
          />
        </label>
        <label>
          Url da imagem:
          <input
            type="text"
            name="image"
            value={ image }
            onChange={ handleChange }
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    );
  }
}

GameForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  sales: PropTypes.number.isRequired,
};

export default GameForm;
