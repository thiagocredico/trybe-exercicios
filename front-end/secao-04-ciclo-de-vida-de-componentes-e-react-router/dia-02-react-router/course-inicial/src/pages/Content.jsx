import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import './Content.css';

class Content extends Component {
  handleClick = () => {
    console.log(this.props);
    // fazer qualquer coisa
    // buscar na api alguns dados
    // validar alguma coisa

    // ai navegar para a home
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <section className="content">
        <h1>Conteúdo do curso</h1>

        {/* <Link to="/">
          <Button>Ir para home</Button>
        </Link> */}

        <Button onClick={ this.handleClick }>Ir para home</Button>

        <div className="modules">
          <Link to="/content/fundamentals">
            <Card
              image="https://lms-assets.betrybe.com/lms/img_fundamentos.png"
              title="Fundamentos"
              description="Módulo"
            />
          </Link>
          <Link to="/content/front">
            <Card
              image="https://lms-assets.betrybe.com/lms/img_front.png"
              title="Front-end"
              description="Módulo"
            />
          </Link>
          <Link to="/content/back">
            <Card
              image="https://lms-assets.betrybe.com/lms/img_back.png"
              title="Back-end"
              description="Módulo"
            />
          </Link>
          <Link to="/content/cs">
            <Card
              image="https://lms-assets.betrybe.com/lms/img_cienciacomp.png"
              title="Ciência da Computação"
              description="Módulo"
            />
          </Link>
        </div>
      </section>
    );
  }
}

Content.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Content;
