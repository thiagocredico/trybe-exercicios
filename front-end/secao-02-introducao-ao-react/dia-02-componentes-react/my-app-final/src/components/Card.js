import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Title from './Title';

class Card extends React.Component {
  render() {
    const { image, title, description } = this.props;

    return (
      <section className="card">
        <img
          src={ image }
          alt="Avatar"
          className="card__img"
        />
        <Title text={ title } />
        <p>{description}</p>
      </section>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
