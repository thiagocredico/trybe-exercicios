import React from "react";

class App extends React.Component {
  state = {
    joke: '',
    img: ''
  };

  fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => this.setState({ joke: data.value, img: data.icon_url }));
  }

  componentDidMount() {
    this.fetchJoke();
  }

  handleClick = () => {
    this.fetchJoke();
  }

  render() {
    const { joke, img } = this.state;

    return (
      <div>
        <h1>Piadas do Chuck Norris</h1>
        <p>{joke}</p>
        <img src={img} alt="Imagem" />

        <br /> <br />

        <button type="button" onClick={this.handleClick}>
            Outra piada
        </button>
      </div>
    );
  }
}

export default App;
