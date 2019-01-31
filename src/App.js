import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile.js';
import Experiences from './Components/Experiences.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <div className="myname">
            <h1>Brad Vatne</h1>
            <p>INTER-REACT-IVE RESUME</p>
          </div>
        </div>
        <Profile />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
