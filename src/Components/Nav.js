import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }

  doHandle() {
    this.props.toggleDropdown();
  }

  render() {

    //Inherits pagehandler from App, used to manage state of page
    //Pagehundler is currently not in use, plans for future implementation
    var pageHandler = this.props.pageHandler;

    
    
    return (
      <div className="site-head">
        <div className="drop-menu">
          <Link
            id="home"
            className="link"
            to={"/"}
            onClick={() => pageHandler("/home")}
          >
            <h1>BRAD VATNE</h1>
          </Link>
          <button onClick={() => this.doHandle()}>
            {this.props.dropdown ? (
              <i className="fas fa-angle-up" />
            ) : (
              <i className="fas fa-angle-down" />
            )}
          </button>
        </div>
        <div className="large-screen">
          <ul className="navlist" id="navlist">
            <li className="right">
              <Link
                id="home"
                className="link"
                to={"/"}
                onClick={() => pageHandler("/home")}
              >
                <h1>BRAD VATNE</h1>
              </Link>
            </li>
            <li className="right">
              <NavLink
                id="profile"
                className="link"
                to={"/profile"}
                onClick={() => pageHandler("/profile")}
              >
                PROFILE
              </NavLink>
            </li>
            <li className="right">
              <NavLink
                className="link"
                to={"/education"}
                onClick={() => pageHandler("/education")}
              >
                EDUCATION
              </NavLink>
            </li>
            <li className="right">
              <NavLink
                className="link"
                to={"/employment"}
                onClick={() => pageHandler("/employment")}
              >
                EMPLOYMENT
              </NavLink>
            </li>
            <li className="right">
              <NavLink
                className="link"
                to={"/abilities"}
                onClick={() => pageHandler("/abilities")}
              >
                ABILITIES
              </NavLink>
            </li>
            <li className="right">
              <NavLink
                className="link"
                to={"/contact"}
                onClick={() => pageHandler("/contact")}
              >
                SOCIAL
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
