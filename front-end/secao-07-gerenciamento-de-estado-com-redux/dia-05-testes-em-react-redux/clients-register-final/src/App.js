import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import About from './pages/About';
import Customers from './pages/Customers';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends React.Component {
  render() {
    return (
      <>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/customers" component={ Customers } />
          <Route path="/about" component={ About } />
        </Switch>
      </>
    );
  }
}

export default App;
