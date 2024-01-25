import React from 'react';
import CardList from './components/CardList';
import GameForm from './components/GameForm';
import Title from './components/Title';
import gamesData from './data/games';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      games: gamesData,
      name: '',
      developer: '',
      image: '',
      sales: 0,
    };
  }

  handleChangeGameForm = (event) => {
    const { target } = event;

    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmitGameForm = (event) => {
    event.preventDefault();
    const {
      name,
      developer,
      image,
      sales,
    } = this.state;

    const cardToAdd = {
      name,
      developer,
      image,
      sales,
    };

    this.setState((currentState) => ({
      games: [cardToAdd, ...currentState.games],
    }));

    this.setState({
      name: '',
      developer: '',
      image: '',
      sales: '',
    });
  };

  render() {
    const { games, name, developer, sales, image } = this.state;

    return (
      <main className="container">
        <Title text="🎮 Os meus jogos favoritos" />
        <GameForm
          name={ name }
          developer={ developer }
          sales={ sales }
          image={ image }
          handleSubmit={ this.handleSubmitGameForm }
          handleChange={ this.handleChangeGameForm }
        />
        <CardList games={ games } />
      </main>
    );
  }
}

export default App;
