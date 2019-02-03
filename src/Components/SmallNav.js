import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export class SmallNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }


  render() {


    console.log(this.props.test);
    var pageHandler = this.props.pageHandler;
    

    return (
      <div className="dropped">
          <ul className="navlist" id="navlist">
            <li className="right">
              <Link
                id="home"
                className="link"
                to={"/"}
                onClick={() => pageHandler("/home")}
              >
                HOME
              </Link>
            </li>
            <li className="right">
              <Link
                id="profile"
                className="link"
                to={"/profile"}
                onClick={() => pageHandler("/profile")}
              >
                PROFILE
              </Link>
            </li>
            <li className="right">
              <Link
                className="link"
                to={"/education"}
                onClick={() => pageHandler("/education")}
              >
                EDUCATION
              </Link>
            </li>
            <li className="right">
              <Link
                className="link"
                to={"/employment"}
                onClick={() => pageHandler("/employment")}
              >
                EMPLOYMENT
              </Link>
            </li>
            <li className="right">
              <Link
                className="link"
                to={"/abilities"}
                onClick={() => pageHandler("/abilities")}
              >
                ABILITIES
              </Link>
            </li>
            <li className="right">
              <Link
                className="link"
                to={"/projects"}
                onClick={() => pageHandler("/projects")}
              >
                PROJECTS
              </Link>
            </li>
            <li className="right">
              <Link
                className="link"
                to={"/contact"}
                onClick={() => pageHandler("/contact")}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          </div>
    )
    }

    
  }


export default SmallNav;
