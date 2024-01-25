import React, { Component } from 'react';
import games from '../data/games';
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

export default CardList;
