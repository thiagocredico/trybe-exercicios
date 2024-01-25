import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';

function App() {
  const [gitData, setGitData] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChangeTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  return (
    <div className={ isDarkTheme ? 'App__Dark' : 'App__Light' }>
      <Header handleChangeTheme={ handleChangeTheme } isDarkTheme={ isDarkTheme } />
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (
            <Login
              { ...props }
              gitData={ gitData }
              setGitData={ setGitData }
            />) }
        />
        <Route
          path="/home"
          render={ (props) => (
            <Home
              { ...props }
              gitData={ gitData }
            />) }
        />
        <Route path="*" component={ PageNotFound } exact />
      </Switch>
    </div>
  );
}

export default App;
