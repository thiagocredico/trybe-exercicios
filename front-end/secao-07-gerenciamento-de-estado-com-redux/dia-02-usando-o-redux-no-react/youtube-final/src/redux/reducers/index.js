import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
