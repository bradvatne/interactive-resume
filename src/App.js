import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile.js';
import Experiences from './Components/Experiences.js';
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
        <Nav />       


         <Switch>
           <Route exact path ="/" component={Name}/>
           <Route path ='/profile' component={Profile}/>
           <Route path ='/experiences' component={Experiences}/>
           <Route path ='/abilities' component={Abilities}/>
           <Route path ='/projects' component={Projects}/>
           <Route path ='/contact' component={Contact}/>
         </Switch>
        </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
