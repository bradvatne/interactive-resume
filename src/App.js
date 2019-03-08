import React, { Component } from "react";
import "./App.css";
import "./Media.css";
import Nav from "./Components/Nav.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Components/Profile.js";
import Employment from "./Components/Employment.js";
import Contact from "./Components/Contact.js";
import Abilities from "./Components/Abilities.js";
import Name from "./Components/Name.js";
import SmallNav from "./Components/SmallNav.js";
import {Education} from './Containers'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "/home",
      dropdown: false
    };
  }

  //State update function, was planning to implement a next page/previous page feature
  pageHandler = (page, nextPage) => {
    this.setState({
      currentPage: page,
      nextPage: nextPage
    });
  }


  // State handler for status of the dropdown menu
  toggleDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
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
                  <Nav
                    pageHandler={this.pageHandler}
                    toggleDropdown={this.toggleDropdown}
                    dropdown={this.state.dropdown}
                  />
                </div>

                {this.state.dropdown ? (
                  <SmallNav
                    pageHandler={this.pageHandler}
                    toggleDropdown={this.toggleDropdown}
                    dropdown={this.state.dropdown}
                  />
                ) : null}

                <Switch>
                  <Route exact path="/" component={Name} />
                  <Route exact path="/interactive-resume" component={Name} />
                  <Route path="/menu" component={SmallNav} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/education" component={Education} />
                  <Route path="/employment" component={Employment} />
                  <Route path="/abilities" component={Abilities} />
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
