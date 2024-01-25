import { Component } from 'react';
import PropTypes from 'prop-types';
import './Quote.css';
import Button from './Button';

class Quote extends Component {
  render() {
    const { content, isFavorite, onFavorite } = this.props;

    return (
      <section className="quote">
        <div className="quoteDetails">
          <div className="quoteText">
            { `“${content.quote}”` }
            <br />
            -
            <span className="authorOrTitle">
              { content.author }
            </span>
          </div>
        </div>
        <div className="action">
          <Button
            className="actionButton"
            onClick={ () => onFavorite(content, isFavorite) }
          >
            { isFavorite ? 'Desfavoritar' : 'Favoritar'}
          </Button>
        </div>
      </section>
    );
  }
}

Quote.propTypes = {
  content: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default Quote;
