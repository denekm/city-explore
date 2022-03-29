import React from 'react';
import './App.css';

class Weather extends React.Component {

  render() {
    return (
      <>
        <h4> Weather Data: </h4>
        {this.props.forecastData.map(day => (
          <div key={this.props.forecastData.indexOf(day)}>
          <p>{day.date}</p>
          <p> {day.description}</p>
          </div>
        ))}
      </>
    )
  }
}

export default Weather;