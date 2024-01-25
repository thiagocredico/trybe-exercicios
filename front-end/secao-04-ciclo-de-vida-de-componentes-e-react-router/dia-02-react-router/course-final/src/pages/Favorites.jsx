import { Component } from 'react';
import Quote from '../components/Quote';

class Favorites extends Component {
  state = {

    favoriteQuotes: [{
      quote: 'carregando...',
      author: '-',
    }],
  };

  componentDidMount() {
    this.geFavoritesLocalstorage();
  }

  componentDidUpdate(prevProps, prevState) {
    const { favoriteQuotes: currentFavoriteQuotes } = this.state;

    if (currentFavoriteQuotes.length !== prevState.favoriteQuotes.length) {
      const newFavorites = JSON.stringify(currentFavoriteQuotes);
      localStorage.setItem('favorites', newFavorites);
    }
  }

  geFavoritesLocalstorage = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));

    if (favorites) {
      this.setState({ favoriteQuotes: favorites });
    }
  };

  removeFromFavorites = (content) => {
    this.setState((prevState) => ({
      favoriteQuotes: prevState.favoriteQuotes.filter((c) => c.quote !== content.quote),
    }));
  };

  render() {
    const { favoriteQuotes } = this.state;
    return (

      <section className="favorite-quotes">
        <h1>Citações favoritas</h1>
        {favoriteQuotes.map((favorite, index) => (
          <Quote
            key={ index }
            content={ favorite }
            onFavorite={ this.removeFromFavorites }
            isFavorite
          />
        ))}
      </section>
    );
  }
}

export default Favorites;
