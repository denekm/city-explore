import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';


class Movies extends React.Component {

  render() {
    return (
      <>
        <h4> Movies: </h4>
        {this.props.moviesResult.map((movie, idx) => (
          < Card key={idx} style={{ width: '35rem' }}>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500${movie.img_url}`}
              alt={movie.title}
            />
            <Card.Body style={{ width: '35rem' }}>>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text>{movie.rating}</Card.Text>
              <Card.Text>{movie.releaseDate}</Card.Text>
            </Card.Body>
          </Card>

        ))
        };
      </>
    )
  }

}

export default Movies;