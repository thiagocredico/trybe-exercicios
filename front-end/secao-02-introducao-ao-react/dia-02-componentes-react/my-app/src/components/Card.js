import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

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
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Card.defaultProps = {
  image: 'https://avatars.githubusercontent.com/u/4885094?s=400&u=ddb8b9749e797c5080b328b90793dbcc8a09bf23&v=4',
};

export default Card;
