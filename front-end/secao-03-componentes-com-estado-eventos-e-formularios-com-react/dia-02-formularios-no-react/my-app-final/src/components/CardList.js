import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
  constructor() {
    super();
    this.state = { nameSearch: '' };
  }

  handleSearchChange = ({ target }) => {
    this.setState({ nameSearch: target.value });
  };

  render() {
    const { nameSearch } = this.state;
    const { games } = this.props;

    return (
      <section className="cards-list">
        <input
          type="text"
          name="search"
          value={ nameSearch }
          onChange={ this.handleSearchChange }
          placeholder="Procurar por nome"
        />
        <section className="cards">
          {
            games
              .filter((game) => (
                game.name.toUpperCase().includes(nameSearch.toUpperCase())
              ))
              .map((game) => (
                <Card
                  key={ game.id }
                  image={ game.image }
                  name={ game.name }
                  developer={ game.developer }
                />
              ))
          }
        </section>
      </section>
    );
  }
}

CardList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
    sales: PropTypes.number.isRequired,
  })).isRequired,
};

export default CardList;
