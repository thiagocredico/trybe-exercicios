import React, { Component } from 'react';
import games from '../data/games';
import Card from './Card';
import './CardList.css';

// Primeiro passo: capturar o evento com o onChange
// Segundo passo: criar o estado do CardList no constructor
// Terceiro passo: fazer o bind da funcao handleChangeInput
// Quarto passo: chamar o this.setState no handleChangeInput

// .addEventListener("change", (event) => { ... })

class CardList extends Component {
  constructor() {
    super();

    // É o estado inicial da CardList
    this.state = {
      inputValue: '',
      // pokemons: [], // estado inicial com pokemons array vazio
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput({ target }) {
    // console.log(event.target.value); // dentro do HTML ainda
    this.setState({
      inputValue: target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    console.log(inputValue);

    // const valores = ['12', '23'];

    return (
      <section className="cards-list">

        <input
          type="text"
          name="search"
          placeholder="Procurar o jogo"
          onChange={ this.handleChangeInput }
        />

        {/* {valores.map((valor) => <h1>{valor}</h1>)} */}

        <section className="cards">
          {
            games
              .filter((game) => game
                .name.toLowerCase().includes(inputValue.toLowerCase()))
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
