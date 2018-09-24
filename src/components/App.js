import React, { Component } from 'react';
import '../App.css';
import Gallery from './Gallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photo Gallery</h1>
        </header>
        <div className="App-intro">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
