import React, { Component } from "react";

export class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header
    };
  }

  convertString(str) {
    let newStr = str.charAt(1).toUpperCase() + str.slice(2, str.length);
    return newStr;
  }

  render() {
    if (this.props.header !== this.state.header) {
      this.setState({
        header: this.props.header
      });
    }
    let head = this.convertString(this.state.header).toUpperCase();
    if (head === "HOME") {
      head = "BRAD VATNE";
    }

    return (
      <div className="header-head">
        <h1>{head}</h1>
      </div>
    );
  }
}

export default Header;
