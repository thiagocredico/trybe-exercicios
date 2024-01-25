import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './pages/Content';
import Module from './pages/Module';
import NotFound from './pages/NotFound';
import Recordings from './pages/Recordings';
import Home from './pages/Home';

// 1. adicionar o BrowserRouter envolve a <App /> (fica na index.js ou main.js)
// 2. na App.js eu importo Switch e Route
// 3. Padrão: <Route path="/nomeRota" component={ Componente } />
// 4. envolver todas as rotas com Switch, para que ele retorne apenas 1 rota
// 5. por boa prática é melhor colocar exact em todas as rotas
// 6. Trocar as de navegação <a> por <Link /> do react router e href= por to=
// 7. Voce pode navegar usando o this.props.history.push("/nomeDaRota")
// 8. Rotas dinamicas, sao rotas que vao ser criadas no momento que usuario navega
// 9. para criar rotas dinamicas usamos a sintaxe do :nomeDaVariavel (exemplo = /:id)
// 10. acessar as variaveis usamos: this.props.match.params.nomeDaVariavel

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="container">
          <Sidebar />

          <main>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/content" component={ Content } />
              <Route exact path="/content/:algumaCoisa" component={ Module } />
              <Route exact path="/live-lectures" component={ Recordings } />
              <Route exact path="*" component={ NotFound } />
            </Switch>

            {/* <Module /> */}
            {/* <Content /> */}
            {/* <Recordings /> */}
            {/* <NotFound /> */}

          </main>
        </section>
      </>
    );
  }
}

export default App;
