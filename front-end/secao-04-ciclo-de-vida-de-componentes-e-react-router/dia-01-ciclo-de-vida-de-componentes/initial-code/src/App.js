import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';

const URL = 'https://api.quotable.io/random';

class App extends Component {
  constructor() {
    super();

    // estado inicial da tela
    this.state = {
      content: {
        quote: 'O silencio é uma dadiva',
        author: 'Will',
      },
      favoriteQuotes: [],
    };
  }

  // isso seria o conteudo mais importante da aula
  componentDidMount() {
    this.fetchQuote(); // api é assincrona
  }

  componentDidUpdate(_, prevState) {
    console.log(prevState);

    const { favoriteQuotes } = this.state;
    console.log(favoriteQuotes.length);
    console.log(prevState.favoriteQuotes.length);

    // se o array de favoritos mudou eu chamo a api novamente
    if (favoriteQuotes.length > prevState.favoriteQuotes.length) {
      this.fetchQuote();
    }
  }

  fetchQuote = async () => {
    const response = await fetch(URL);
    const data = await response.json(); // retorna uma nova citacao
    this.setState({
      content: {
        quote: data.content, // peco para o React atualizar a tela com a nova citacao
        author: data.author,
      },
    });
  };

  handleFavorite = (content) => {
    console.log(content);

    // if

    // estamos add a citacao para o array de favoritos
    this.setState((prevState) => ({
      favoriteQuotes: [...prevState.favoriteQuotes, content],
    }));
  };

  render() {
    const { content, favoriteQuotes } = this.state;
    return (
      <>
        <Header />

        <main className="container">

          <section className="main-quote">
            <h1>Citação</h1>
            <Quote
              content={ content }
              isFavorite={ false }
              onFavorite={ this.handleFavorite }
            />
            <button className="change-btn" onClick={ this.fetchQuote }>Trocar</button>
          </section>

          <section className="favorite-quotes">
            <h1>Citações favoritas</h1>
            {favoriteQuotes.map((contentFavorite) => (
              <Quote
                key={ contentFavorite.quote }
                content={ contentFavorite }
                isFavorite
                onFavorite={ this.handleFavorite }
              />
            ))}
          </section>
        </main>
      </>
    );
  }
}

export default App;
