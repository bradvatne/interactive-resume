import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class SmallNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      dropdown: props.dropdown
    };
  }


  doHandle(page) {
    console.log('smallnav before state' + this.state.dropdown)
    
    //
    this.setState({
        dropdown: !this.state.dropdown
      })
      console.log('smallnave after state' + this.state.dropdown)
    this.props.navHandler(this.state.dropdown)
    if (page !== undefined) {this.props.pageHandler(page) }
  }

  render() {
    console.log(this.props.dropdown);
    var pageHandler = this.props.pageHandler;


    return (
      <div className="dropped">
        <ul className="navlist" id="navlist">
          <li className="right">
            <Link
              id="home"
              className="link"
              to={"/"}
              onClick={() => this.doHandle("/home")}
            >
              HOME
            </Link>
          </li>
          <li className="right">
            <Link
              id="profile"
              className="link"
              to={"/profile"}
              onClick={() => this.doHandle("/profile")}
            >
              PROFILE
            </Link>
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/education"}
              onClick={() => this.doHandle("/education")}
            >
              EDUCATION
            </Link>
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/employment"}
              onClick={() => this.doHandle("/employment")}
            >
              EMPLOYMENT
            </Link>
          </li>
          <li className="right">
            {/* <Link
              className="link"
              to={"/abilities"}
              onClick={() => this.doHandle("/abilities")}
            >
              ABILITIES
            </Link> */}
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/projects"}
              onClick={() => this.doHandle("/projects")}
            >
              PROJECTS
            </Link>
          </li>
          <li className="right">
            <Link
              className="link"
              to={"/contact"}
              onClick={() => this.doHandle("/contact")}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SmallNav;
