import { Component } from 'react';
import PropTypes from 'prop-types';

// const MATH_PI = 3.1416;

// 2 formas de criar componente: com class e com function
// mas prefiram por enquanto as class

// this existe somente em classes
class Title extends Component {
  render() {
    const { text } = this.props;
    return (
      <h1>{text}</h1>
    );
  }
}

// function Title(props) {
//   const { text } = props;
//   return (
//     <h1>{text}</h1>
//   );
// }

// a definicao dos valores das props que eu vou receber
// exemplo: se a props é uma string e ela é obrigatorio
Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
