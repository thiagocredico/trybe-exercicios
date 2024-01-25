import React from 'react';
import './App.css';
import {
  Route, Switch,
} from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Comments from './pages/Comments';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/projects" component={ Projects } />
          <Route path="/comments" component={ Comments } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    </>
  );
}

export default App;
