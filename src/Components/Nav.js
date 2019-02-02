import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Profile.js";
import Header from "./Header.js";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { currentPage: "home" };
  }

  handleClick() {
    this.setState({ isLoggedIn: true });
  }

  // setPage(page) {
  // var tab = document.querySelector('navlist').querySelector(page);
  // return (tab.classList.contains('active') ? tab.classList.add('active') : null)}

  render() {
    var heading = <h1 class="heading-animate">{this.state.currentPage}</h1>;

    //THIS IS AN ABSOLUTE SHITSHOW OF CODE
    return (
      <div>
        <ul className="navlist" id="navlist">
          <li className="right">
            <Link
              id="home"
              className="link"
              to={"/"}
              onClick={() => this.setState({ currentPage: "home" })}
            >
              HOME
            </Link>
          </li>
          <li className="right">
            <Link
              id="profile"
              className="link"
              to={"/profile"}
              onClick={() => this.setState({ currentPage: "profile" })}
            >
              PROFILE
            </Link>
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/education"}
              onClick={() => this.setState({ currentPage: "education" })}
            >
              EDUCATION
            </Link>
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/employment"}
              onClick={() => this.setState({ currentPage: "employment" })}
            >
              EMPLOYMENT
            </Link>
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/abilities"}
              onClick={() => this.setState({ currentPage: "abilities" })}
            >
              ABILITIES
            </Link>
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/projects"}
              onClick={() => this.setState({ currentPage: "projects" })}
            >
              PROJECTS
            </Link>
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/contact"}
              onClick={() => this.setState({ currentPage: "contact" })}
            >
              CONTACT
            </Link>
          </li>
        </ul>

      <Header header = {heading}/>
      </div>
    );
  }
}

export default Nav;
