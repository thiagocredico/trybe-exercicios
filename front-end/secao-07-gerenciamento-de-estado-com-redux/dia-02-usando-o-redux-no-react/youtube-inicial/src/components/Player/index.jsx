import React from 'react';
import { connect } from 'react-redux';

import './player.css';

class Player extends React.Component {
  render() {
    const { movie = {}, category = {} } = this.props;
    console.log(this.props);

    return (
      <div className="player">
        {movie && (
          <>
            <div className="video-container">
              <iframe
                src={ `https://www.youtube.com/embed/${movie.embedId}` }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="movie-details">
              <div className="movie-infos">
                <h2>{movie.title}</h2>
                <p>
                  Released in
                  {' '}
                  {movie.released}
                </p>
                <p className="category">{category.name}</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (todoRedux) => ({
  movie: todoRedux.movie.selectedMovie,
  category: todoRedux.movie.selectedCategory,
});

export default connect(mapStateToProps)(Player);
