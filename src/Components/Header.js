import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state ={
      old: '',
      new: ''
    }
  }


   shouldComponentUpdate(nextProps) {
     const differentHeader = this.props.header !== nextProps.header;
     console.log(differentHeader);
     return differentHeader;
   }

  render() {
    return (
      <div className="fadeIn">
      <br/>
        <h1 className="fadeIn">{this.props.header}</h1>
        <hr />
      </div>
    );
  }
}

export default Header;
