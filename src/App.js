import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile.js';
import Experiences from './Components/Experiences.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <div className="myname">
            <h1>Brad Vatne</h1>
            <p>INTER-<strong style={{color: 'white'}}>REACT</strong>-IVE RESUME</p>
          </div>
        </div>
        <Profile />
        <Experiences />
      </div>
    );
  }
}

export default App;
