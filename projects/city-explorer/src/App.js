import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      searchQuery:''
    }

  }
  getLocatipn = async() => {
    const url = 'https://us1.locationiq.com/v1/search.php?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json'
  }
  render() {
    return (
      <div className='App'>
        <input onChange={(event) => this.setState({searchQuery: event.target.value})} placeholder= 'look up a city'></input>
   < button onClick ={this.getLocation}> Explore</button>
   </div >
    );
  }
}

export default App;
