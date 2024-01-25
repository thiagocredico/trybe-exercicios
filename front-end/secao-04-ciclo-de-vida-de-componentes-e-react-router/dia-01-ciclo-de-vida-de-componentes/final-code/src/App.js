import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';

const URL = 'https://api.quotable.io/random';

class App extends Component {
  state = {
    content: {
      quote: 'carregando...',
      author: '-',
    },
    favoriteQuotes: [],
  };

  componentDidMount() {
    this.fetchQuote();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    const { favoriteQuotes: currentFavoriteQuotes } = this.state;

    if (currentFavoriteQuotes.length > prevState.favoriteQuotes.length) {
      console.log('teste');
      this.fetchQuote();
    }
  }

  fetchQuote = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({
      content: {
        quote: data.content,
        author: data.author,
      },
    });
  };

  handleFavoriteQuote = (content, isFavorite) => {
    if (isFavorite) {
      this.setState((prevState) => ({
        favoriteQuotes: prevState.favoriteQuotes.filter((c) => c.quote !== content.quote),
      }));

      return;
    }
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
              onFavorite={ this.handleFavoriteQuote }
            />
            <button className="change-btn" onClick={ this.fetchQuote }>Trocar</button>
          </section>
          <section className="favorite-quotes">
            <h1>Citações favoritas</h1>
            {favoriteQuotes.map((favorite, index) => (
              <Quote
                key={ index }
                content={ favorite }
                onFavorite={ this.handleFavoriteQuote }
                isFavorite
              />
            ))}
          </section>
        </main>
      </>
    );
  }
}

export default App;
