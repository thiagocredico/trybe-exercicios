import React, { Component } from 'react';

class LifeCicleFunction extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // ComponentDidMount
  componentDidMount() {
    // É chamado sempre que o componente é montado
    console.log('Fui chamado no componentDidMount');
  }

  // componentDidUpdate
  componentDidUpdate() {
    // É chamado sempre que o componente é atualizado
    console.log('Fui chamado no componentDidUpdate');
  }

  // componentWillUnmount
  componentWillUnmount() {
    // É chamado sempre que o componente é desmontado
    console.log('Fui chamado no componentWillUnmount');
  }

  handleClick() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    console.log('render');
    const { counter } = this.state;
    const { history } = this.props;
    return (
      <div>
        <button className="App__Button" type="button" onClick={ this.handleClick }>
          {`Clicou ${counter} vezes`}
        </button>
        <button className="App__Button" type="button" onClick={ () => history.push('/') }>
          Voltar
        </button>
      </div>
    );
  }
}

export default LifeCicleFunction;
