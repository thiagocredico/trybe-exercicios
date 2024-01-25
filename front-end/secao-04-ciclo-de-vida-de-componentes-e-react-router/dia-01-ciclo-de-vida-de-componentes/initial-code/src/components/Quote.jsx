import { Component } from 'react';
import PropTypes from 'prop-types';
import './Quote.css';

class Quote extends Component {
  render() {
    const { content, isFavorite, onFavorite } = this.props;

    return (
      <div className="quote">
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
          <button
            className="actionButton"
            onClick={ () => onFavorite(content) }
            // onClick={ onFavorite }
          >
            { isFavorite ? 'Desfavoritar' : 'Favoritar' }
          </button>
        </div>
      </div>
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
