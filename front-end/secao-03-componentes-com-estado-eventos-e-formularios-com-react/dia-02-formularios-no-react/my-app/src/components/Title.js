import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.css';

export default class Title extends Component {
  render() {
    const { text } = this.props;

    return (
      <h1 className="title">{text}</h1>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
