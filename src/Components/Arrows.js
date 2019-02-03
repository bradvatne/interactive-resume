import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Arrows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: this.props.currentPage,
      nextPage: this.props.nextPage,
      expand: false
    };
  }

  //Converts a string from '/index' to 'Index' for Router usage
  convertString(str) {
    let newStr = str.charAt(1).toUpperCase() + str.slice(2, str.length);
    return newStr;
  }

  render() {
    let nextUrl = "";
    let lastUrl = "";
    let nextComponent = this.convertString(nextUrl);
    let lastComponent = this.convertString(lastUrl);

    if (this.props.header !== this.state.header) {
      lastUrl = this.setState({
        header: this.props.header
      });
    }

    let buttonLeft = "<";
    let buttonRight = ">";

    return (
      <Router>
        <div>
          <Link to={lastUrl}>
            <button>{buttonLeft}</button>
          </Link>
          <Link to={nextUrl}>
            <button>{buttonRight}</button>
          </Link>

          <Route path={lastUrl} component={lastComponent} />
          <Route path={nextUrl} component={nextComponent} />
        </div>
      </Router>
    );
  }
}

export default Arrows;
