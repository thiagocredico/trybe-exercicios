import { SELECT_MOVIE } from '../actions';
import data from '../../data';

const INITIAL_STATE = {
  categories: [...data],
  selectedCategory: null,
  selectedMovie: null,
};
const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_MOVIE: {
    // precisa copiar todo o state { ...state }
    // depois alterar a propriedade que eu quero usando action.payload

    // mexe no objeto original, PORTANTO ESTA ERRADO
    // state.selectedMovie = action.payload.movie
    // state.selectedCategory = action.payload.category
    // return state

    // cria um novo objeto alterando as informacoes
    const newObject = {
      ...state,
      selectedMovie: action.payload.movie,
      selectedCategory: action.payload.category,
    };
    return newObject;
  }
  default:
    return state;
  }
};

export default movieReducer;
