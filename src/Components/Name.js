import React, { Component } from "react";
import Github from "./Github.js";

export class Name extends Component {
  render() {
    return (
      <div className="intro fadeIn">
        <hr />
        <h3>
          WELCOME TO MY INTERACTIVE RESUME
          <br />
        </h3>
        <br />
        <p>
          I designed and built this site myself with HTML, CSS, and React.js.{" "}
          <br />
          If you're a prospective employer, I'm honored and thankful that you're
          taking the time to view my work. <br />
          This project has been an incredible learning experience and it is my
          absolute pleasure to share it with you!
          <br />
        </p>
        <hr />
        <h3>Github Feed</h3>
        <br />
        <Github />
        <hr />
        <h3>Strava Feed</h3>
        <br />
        <p>Coming soon...</p>
      </div>
    );
  }
}

export default Name;
