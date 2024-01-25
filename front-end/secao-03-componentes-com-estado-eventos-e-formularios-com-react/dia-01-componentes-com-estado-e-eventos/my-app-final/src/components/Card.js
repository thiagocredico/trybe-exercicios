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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
};

export default Card;
