import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';
import AppContext from './context/AppContext';

function App() {
  const { isDarkTheme } = useContext(AppContext);

  return (
    <div className={ isDarkTheme ? 'App__Dark' : 'App__Light' }>
      <Header />
      <Switch>
        <Route exact path="/" render={ () => (<Login />) } />
        <Route path="/home" render={ () => (<Home />) } />
        <Route path="*" component={ PageNotFound } exact />
      </Switch>
    </div>
  );
}

export default App;
