import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';
import LifeCicleClass from './pages/CicleClass';
import LifeCicleFunction from './pages/CicleFunction';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [gitData, setGitData] = useState(null);

  const handleUpdateUser = (user) => {
    setGitData(user);
  };

  // useEffect(() => {
  //   console.log('gitData: ', gitData);
  // }, [gitData]);

  return (
    <div className={ isDarkTheme ? 'App__Dark' : 'App__Light' }>
      <Header changeTheme={ setIsDarkTheme } theme={ isDarkTheme } />
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Login { ...props } setGitData={ handleUpdateUser } />) }
        />
        <Route
          path="/home"
          render={ (props) => (<Home
            { ...props }
            gitData={ gitData }
            setGitData={ handleUpdateUser }
          />) }
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

export default App;
