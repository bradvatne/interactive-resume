import React, { Component } from "react";
import "./App.css";
import "./Media.css";
import Nav from "./Components/Nav.js";
import Arrows from "./Components/Arrows.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile.js";
import Education from "./Components/Education.js";
import Employment from "./Components/Employment.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";
import Abilities from "./Components/Abilities.js";
import Name from "./Components/Name.js";
import SmallNav from "./Components/SmallNav.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "/home"
    };
    this.pageHandler = this.pageHandler.bind(this);
  }

  pageHandler(page, nextPage) {
    this.setState({
      currentPage: page,
      nextPage: nextPage
    });
  }

  render() {
    return (
      <div className="app">
        <div className="layer">
          <div className="component">
            <Router>
              <div className="container">
                <div>
                  <Nav pageHandler={this.pageHandler} />
                </div>

                <Switch>
                  <Route exact path="/" component={Name} />
                  <Route path="/menu" component={SmallNav} />
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
    );
  }
}

export default App;
