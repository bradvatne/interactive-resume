import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile.js';
import Experiences from './Components/Experiences.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import Abilities from './Components/Abilities.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <div className="section-head">
            <div className="myname"><h1>Brad Vatne</h1><hr/><p>INTER-REACT-IVE RESUME</p></div>
          </div>
        </div>
        <Profile />
        <Experiences />
        <Abilities />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
