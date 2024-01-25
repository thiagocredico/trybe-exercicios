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
    const { match } = this.props;
    const { params } = match;
    const { algumaCoisa } = params; // define o que a API vai retornar
    const content = await getContent(algumaCoisa); // api retorna o que vier na URL
    console.log(content);
    // buscar o curso na API
    this.setState({
      contentModule: content,
      isLoading: false,
    });
  };

  render() {
    const { contentModule, isLoading } = this.state;

    // console.log(this.props.match.params.algumaCoisa);

    if (isLoading) return <h1>Carregando...</h1>;

    return (
      <section className="Module">
        <p>Cheguei na rota dinamica</p>
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
      algumaCoisa: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Module;
