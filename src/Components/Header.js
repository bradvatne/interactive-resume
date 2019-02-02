import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="fadeIn">
        <h1 className>{this.props.header}</h1>
        <hr />
      </div>
    );
  }
}

export default Header;
