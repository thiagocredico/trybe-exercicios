import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Title from './Title';

class Card extends React.Component {
  render() {
    const { image, name, developer } = this.props;

    return (
      <section className="card">
        <img
          src={ image }
          alt="Avatar"
          className="card__img"
        />
        <Title text={ name } />
        <p>{developer}</p>
      </section>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
};

Card.defaultProps = {
  image: 'https://avatars.githubusercontent.com/u/4885094?s=400&u=ddb8b9749e797c5080b328b90793dbcc8a09bf23&v=4',
};

export default Card;
