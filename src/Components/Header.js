import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header
    };
  }

  render() {
    let header = this.state.header;

    return (
      <div className="fadeIn">
        <br />
        <h1 className="fadeIn">{header}</h1>
        <hr />
      </div>
    );
  }
}

export default Header;
