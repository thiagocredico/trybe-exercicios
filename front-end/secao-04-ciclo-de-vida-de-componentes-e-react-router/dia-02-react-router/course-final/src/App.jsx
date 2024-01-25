import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './pages/Content';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Module from './pages/Module';
import NotFound from './pages/NotFound';
import Recordings from './pages/Recordings';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="container">
          <Sidebar />

          <main>
            <Switch>
              <Route exact path="/content/:nameModule" component={ Module } />
              <Route exact path="/content" component={ Content } />
              <Route exact path="/live-lectures" component={ Recordings } />
              <Route exact path="/favorites" component={ Favorites } />
              <Route exact path="/" component={ Home } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </main>
        </section>
      </>
    );
  }
}

export default App;
