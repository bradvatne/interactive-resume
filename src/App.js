import React, { Component } from "react";
import "./App.css";
import Profile from "./Components/Profile.js";
import Education from "./Components/Education.js";
import Employment from "./Components/Employment.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";
import Abilities from "./Components/Abilities.js";
import Nav from "./Components/Nav.js";
import Name from "./Components/Name.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Arrows from "./Components/Arrows.js";
import { HookMapInterceptor } from "tapable";
import Header from "./Components/Header.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "/home",
      lastPage: "/home",
      nextPage: "/profile"
    };
  }

  //Converts a string from '/index' to 'Index' for Router usage
  
  convertString(str) {
    let newStr;
      for (let i=1; 1<str.length; i++) {
        if (i===1) {newStr+=str[i].toUpperCase() }
        else { newStr+=str[i]}
      }
      return newStr;
  }
  


  render() {
    let lastPage = this.state.lastPage;
    let currentPage = this.state.currentPage;
    let nextPage = this.state.nextPage;
    let test = '/hello'
    console.log(this.convertString(test))

    return (
      <div className="app">
        <div className="layer">
          <div className="component">
            <div className="container">
              <Router>
              <div>
              {/* <Header currentPage={currentPage} />

                  <Arrows lastPage={lastPage} nextPage={nextPage}/> */}
                  <Nav />

                  <Switch>
                    <Route exact path="/" component={Name} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/education" component={Education} />
                    <Route path="/employment" component={Employment} />
                    <Route path="/abilities" component={Abilities} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
