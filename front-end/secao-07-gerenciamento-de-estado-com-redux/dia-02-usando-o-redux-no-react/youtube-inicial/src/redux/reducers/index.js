// estava como estado da App.js
// state = {
//   categories: [...data],
//   selectedCategory: data[0],
//   selectedMovie: data[0].movies[0],
// };
import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import xablauReducer from './xablauReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  xablau: xablauReducer,
});

export default rootReducer;
