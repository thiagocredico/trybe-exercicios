// Actions type
export const SELECT_MOVIE = 'SELECT_MOVIE'; // clean code

// funcao que estava na App.js vou migra-la para uma action
// selectMovie = (movie, category) => {
//   this.setState({
//     selectedMovie: movie,
//     selectedCategory: category,
//   });
// };

// FUNCAO chamamos de Action Creator
export function selectMovie(movie, category) {
  return {
    type: SELECT_MOVIE,
    // movie,
    // category,
    payload: {
      movie,
      category,
    },
  };
}
