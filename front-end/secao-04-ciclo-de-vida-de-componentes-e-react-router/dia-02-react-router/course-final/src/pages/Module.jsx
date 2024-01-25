import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getContent from '../services/contentApi';
import './Module.css';

class Module extends Component {
  state = {
    contentModule: {},
    isLoading: true,
  };

  componentDidMount() {
    this.getContentModule();
  }

  getContentModule = async () => {
    const { match: { params: { nameModule } } } = this.props;
    const content = await getContent(nameModule);
    this.setState({
      contentModule: content,
      isLoading: false,
    });
  };

  render() {
    const { contentModule, isLoading } = this.state;

    if (isLoading) return <h1>Carregando...</h1>;

    return (
      <section className="Module">
        <h1>{contentModule.module}</h1>
        <p>
          {contentModule.description}
        </p>
      </section>
    );
  }
}

Module.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      nameModule: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Module;
