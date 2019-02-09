import React, { Component } from "react";
import { Link } from "react-router-dom";

class SmallNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //This doHandle function sets state for SmallNav,
  //and runs toggleDropdown (inherited from App) to update App state
  doHandle(page) {
    
    this.props.toggleDropdown();
    if (page !== undefined) {
      this.props.pageHandler(page);
    }
  }

  render() {


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
            <Link
              className="link"
              to={"/abilities"}
              onClick={() => this.doHandle("/abilities")}
            >
              ABILITIES
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
