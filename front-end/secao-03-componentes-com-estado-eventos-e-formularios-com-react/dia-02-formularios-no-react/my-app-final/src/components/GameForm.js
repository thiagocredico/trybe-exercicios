import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GameForm.css';

class GameForm extends Component {
  render() {
    const { name, developer, image, sales, handleSubmit, handleChange } = this.props;

    return (
      <form className="new__game__form" onSubmit={ handleSubmit }>
        <h2>Cadastre um novo jogo</h2>
        <label>
          Nome:
          <input type="text" value={ name } onChange={ handleChange } name="name" />
        </label>
        <label>
          Desenvolvedora:
          <input
            type="text"
            value={ developer }
            onChange={ handleChange }
            name="developer"
          />
        </label>
        <label>
          Número de vendas:
          <input
            type="number"
            value={ sales }
            onChange={ handleChange }
            name="sales"
          />
        </label>
        <label>
          Url da imagem:
          <input
            type="text"
            value={ image }
            onChange={ handleChange }
            name="image"
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    );
  }
}

GameForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  sales: PropTypes.number.isRequired,
};

export default GameForm;
