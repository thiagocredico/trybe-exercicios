import React from 'react';
import CardList from './components/CardList';
import GameForm from './components/GameForm';
import Title from './components/Title';
import videoGames from './data/games';

class App extends React.Component {
  constructor() {
    super();

    // estado inicial
    this.state = {
      games: videoGames,
      name: '',
      developer: '',
      image: '',
      sales: 0,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // parei o form

    console.log(this.state);

    // retiro o estado da App
    const {
      name,
      developer,
      image,
      sales,
    } = this.state;

    const cardGame = {
      name,
      developer,
      image,
      sales,
    };

    // quero fazer uma copia do array original
    // regra da imutabilidade - nao mexer no original

    // se eu quiser fazer copia de array eu uso o spread operator ( ... )

    // chamar o setState com um array diferente o React monta a tela denovo com os novos valores
    // this.setState({
    //   games: [...this.state.games, cardGame],
    // });

    // boa pratica de atualizar um Array no React
    this.setState((prevState) => ({
      games: [...prevState.games, cardGame],
      name: '',
      developer: '',
      image: '',
      sales: 0, // apagando o estado que estava preenchido
    }));

    // this.setState(() => {
    //   return {
    //     games: [...prevState.games, cardGame], // esse objeto é o novo state do React
    //   }
    // })
  };

  render() {
    const { games, name, developer, image, sales } = this.state;

    return (
      <main className="container">
        <Title text="🎮 Os meus jogos favoritos" />
        <GameForm
          name={ name }
          developer={ developer }
          image={ image }
          sales={ sales }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
        />
        <CardList games={ games } />
      </main>
    );
  }
}

export default App;
