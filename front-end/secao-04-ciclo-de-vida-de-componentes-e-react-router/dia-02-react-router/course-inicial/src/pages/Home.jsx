import { Component } from 'react';
import Button from '../components/Button';
import Quote from '../components/Quote';

const URL = 'https://api.quotable.io/random';

class Home extends Component {
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
    const { favoriteQuotes: currentFavoriteQuotes } = this.state;

    if (currentFavoriteQuotes.length !== prevState.favoriteQuotes.length) {
      this.fetchQuote();
      const newFavorites = JSON.stringify(currentFavoriteQuotes);
      localStorage.setItem('favorites', newFavorites);
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
        <section className="main-quote">
          <h1>Citação</h1>
          <Quote
            content={ content }
            isFavorite={ false }
            onFavorite={ this.handleFavoriteQuote }
          />
          <Button className="change-btn" onClick={ this.fetchQuote }>Trocar</Button>
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
      </>
    );
  }
}

export default Home;
