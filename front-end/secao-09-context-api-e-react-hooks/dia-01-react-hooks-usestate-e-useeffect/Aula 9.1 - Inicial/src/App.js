import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';
import LifeCicleClass from './pages/CicleClass';
import LifeCicleFunction from './pages/CicleFunction';

class App extends Component {
  state = {
    isDarkTheme: true,
  };

  handleChangeTheme = (isDarkTheme) => {
    this.setState({ isDarkTheme });
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <div className={ isDarkTheme ? 'App__Dark' : 'App__Light' }>
        <Header changeTheme={ this.handleChangeTheme } theme={ isDarkTheme } />
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Login { ...props } />) }
          />
          <Route
            path="/home"
            render={ (props) => (<Home { ...props } />) }
          />
          <Route
            path="/life-cicle-class"
            render={ (props) => (<LifeCicleClass { ...props } />) }
          />
          <Route
            path="/life-cicle-function"
            render={ (props) => (<LifeCicleFunction { ...props } />) }
          />
          <Route path="*" component={ PageNotFound } exact />
        </Switch>
      </div>
    );
  }
}

export default App;
