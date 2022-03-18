import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationObj: {}
    }
  }
  getLocatipn = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
    const response = await axios.get(url);
    console.log(response.data[0]);
    this.setState({ locationObj: response.data[0]});
  }
  render() {
    return (
      <div className='App'>
        <input onChange={(event) => this.setState({ searchQuery: event.target.value})} placeholder='look up a city'></input>
        <button onClick={this.getLocation}> Explore</button>
        {this.state.locationObj.display_name &&
          <h3> The city searched for is: {this.state.locationObj.display_name}</h3>
        }
      </div >
    );
  }
}

export default App;
