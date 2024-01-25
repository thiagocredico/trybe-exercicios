// Gabarito - Exercício 4
const averageRating = (object) => {
  const moviesRatingList = Object.values(object);
  let sumRating = 0;

  for (let rating of moviesRatingList) {
    sumRating += rating 
  }

  return sumRating / moviesRatingList.length;
}

const findMovieOrAvgRating = (object, movie) => {
  if (movie) {
    const moviesList = Object.keys(object);
    return moviesList.includes(movie);
  }

  return averageRating(object);
};

const movieRatings = {
  'The Godfather': 9.2,
  'The Matrix': 8.7,
  'The Lion King': 8.5,
  'Fight Club': 8.8,
  'The Prestige': 8.5,
};

console.log(
  findMovieOrAvgRating(movieRatings, 'The Matrix')
); // true

console.log(
  findMovieOrAvgRating(movieRatings, 'The Xablau Chronicles')
); // false

console.log(
  findMovieOrAvgRating(movieRatings)
); // 8.74
