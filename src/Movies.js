import React from 'react';
import './App.css';

class Movies extends React.Component {

  render() {
    return (
      <>
        <h4> Movie Data: </h4>
        {this.props.moviesResult.map(movie => (
          <div key={this.props.moviesResult.indexOf(movie)}>
          <p>{movie.title}</p>
          <p> {movie.overview}</p>
          </div>
        ))}
      </>
    )
  }
}

export default Movies;