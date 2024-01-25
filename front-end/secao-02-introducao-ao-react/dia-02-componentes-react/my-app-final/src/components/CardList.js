import React, { Component } from 'react';
import videoGames from '../data/games';
import Card from './Card';
import './CardList.css';

export default class CardList extends Component {
  render() {
    return (
      <section className="card-list">
        {videoGames.map((game) => (
          <Card
            key={ game.id }
            image={ game.img }
            title={ game.title }
            description={ game.developer }
          />
        ))}
      </section>
    );
  }
}
