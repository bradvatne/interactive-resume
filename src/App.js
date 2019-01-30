import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <div className="myname">
            <h1>Brad Vatne</h1>
            <p>INTERACTIVE RESUME</p>
          </div>
        </div>
        <Profile />
      </div>
    );
  }
}

export default App;
