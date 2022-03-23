import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationObj: {},
      map: '',
      err: ''
    }

  }
  
  getLocation = async () => {
    try {

      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json` 

      const response = await axios.get(url);
      
      console.log(response);
      this.setState({ err: '' });
      this.setState({ locationObj: response.data[0] });
      this.setState({ map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=12` });
    }
    catch (error) {
      this.setState({ err: error.message });
      this.setState({ locationObj: ''});
    }
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <input onChange={(event) => this.setState({ searchQuery: event.target.value })} placeholder='city'></input>
        <button onClick={this.getLocation}> Explore!</button>

        {this.state.locationObj.display_name &&
          <>
            <h2> The city you searched for was: {this.state.locationObj.display_name}</h2>
            <h3> latitude: {this.state.locationObj.lat}</h3>
            <h3> longitude: {this.state.locationObj.lat}</h3>
            <img src={this.state.map} alt={this.state.locationObj.display_name} title={this.state.locationObj.display_name} />
          </>
        }
        {this.state.err &&
          <>
            <h3> ERROR: {this.state.err}</h3>
          </>
        }
      </div >
      
    );
  }
}

export default App;
