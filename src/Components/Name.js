import React, { Component } from "react";

export class Name extends Component {
  render() {
    return (
      <div>
        <div className="header fadeIn">
          <h1>BRAD VATNE</h1>
          <hr />
        </div>
        <div className="intro fadeIn">
          <h2>
            WELCOME TO MY INTERACTIVE RESUME
            <br />
          </h2>
          <br />
          <p>
            I designed and built this site myself with HTML, CSS, and React.js.{" "}
            <br />
            If you're a prospective employer, I'm honored and thankful that
            you're taking the time to view my work. <br />
            This project has been an incredible learning experience and it my
            absolute pleasure to share it with you!
            <br />
          </p>
          <hr />
          <h3>Github Feed</h3><br/>
          <p>//TODO</p>
          <hr/>
          <h3>Strava Feed</h3><br/>
          <p>//TODO</p>
        </div>
      </div>
    );
  }
}

export default Name;
