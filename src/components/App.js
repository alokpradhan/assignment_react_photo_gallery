import React, { Component } from 'react';
import '../App.css';
import Gallery from './Gallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <h2 className="app-title">Photo Gallery</h2>
        </div>
        <div className="App-intro">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
