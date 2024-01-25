import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDisplay from './pages/FormDisplay';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <main className="has-background-light my-container">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/personal-form" component={ PersonalForm } />
          <Route path="/professional-form" component={ ProfessionalForm } />
          <Route path="/form-display" component={ FormDisplay } />
        </Switch>
      </main>
    );
  }
}

export default App;
