import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../../redux/actions';

import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    const { categories, dispatch } = this.props;
    console.log(this.props);

    return (
      <aside className="sidebar">
        {categories.map((category) => (
          <div className="category-list" key={ category.id }>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={ movie.id }>
                  <button
                    type="button"
                    onClick={ () => dispatch(selectMovie(movie, category)) }
                  >
                    {movie.title}
                    {' '}
                    (
                    {movie.released}
                    )
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

// se conecte ao Redux
// const funcaoConectoraAoRedux = connect();
// const ComponenteConectado = funcaoConectoraAoRedux(Sidebar);
// export default ComponenteConectado;

// function fakeconnect(parametroFakePegaState) {
//   conecta ao redux
//   const state = store.getState() // faz tipo isso
//   const props = parametroFakePegaState(state)
//   return (Componente) => { return <Componente dispatch={dispatch} {...props} /> }
// }

function mapStateToProps(globalState) {
  // return globalState; // retorno todo o redux
  return {
    categories: globalState.movie.categories,
  };
}

export default connect(mapStateToProps)(Sidebar);
