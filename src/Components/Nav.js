import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Profile.js";

export class Nav extends Component {
  render() {
    return (
        <ul className="navlist">
          <li className="right">
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="right">
            <Link className="link" to={"/profile"}>
              PROFILE
            </Link>
          </li>
          <li className="right">
            <Link className="link" to={"/education"}>
              EDUCATION
            </Link>
          </li>
          <li className="right">
            <Link className="link" to={"/employment"}>
              EMPLOYMENT
            </Link>
          </li>
          <li className="right">
            <Link className="link" to={"/abilities"}>
              ABILITIES
            </Link>
          </li>
          <li className="right">
            <Link className="link" to={"/projects"}>
              PROJECTS
            </Link>
          </li>
          <li className="right">
            <Link className="link" to={"/contact"}>
              CONTACT
            </Link>
          </li>
        </ul>
    );
  }
}

export default Nav;
