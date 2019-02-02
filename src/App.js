import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile.js';
import Education from './Components/Education.js';
import Employment from './Components/Employment.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import Abilities from './Components/Abilities.js';
import Nav from './Components/Nav.js';
import Name from './Components/Name.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
        <div className="layer">
        <div className="component">
        <div className="container">
        <Nav />       


         <Switch>
           <Route exact path ="/" component={Name}/>
           <Route path ='/profile' component={Profile}/>
           <Route path ='/education' component={Education}/>
           <Route path ='/employment' component={Employment}/>
           <Route path ='/abilities' component={Abilities}/>
           <Route path ='/projects' component={Projects}/>
           <Route path ='/contact' component={Contact}/>
         </Switch>
        </div>
        </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
