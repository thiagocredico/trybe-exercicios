import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import './App.css';

class App extends React.Component {
  // estado global
  // state = {
  //   selectedCategory: data[0],
  //   selectedMovie: data[0].movies[0],
  // };

  // isso vai virar action no final
  // selectMovie = (movie, category) => {
  //   this.setState({
  //     selectedMovie: movie,
  //     selectedCategory: category,
  //   });
  // };

  render() {
    return (
      <div className="app">
        <Header />
        <Player />
        <Sidebar />
      </div>
    );
  }
}

export default App;
