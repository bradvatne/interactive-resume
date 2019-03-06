import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div className="fadeIn">
      <hr/>
      <h2>SOCIAL</h2>
      <hr/>
        <div className="contact-boxes">
          <a href="mailto:bradvatne@gmail.com">
            <i class="far fa-envelope" />
          </a>
          <a href="https://www.github.com/notbrad">
            <i class="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/bradvatne/">
            <i class="fab fa-linkedin-in" />
          </a>
          <a href="https://www.youtube.com/channel/UCNGyzxKD8MJATTBv_QPaTeg/featured">
            <i class="fab fa-youtube" />
          </a>
        </div>
        <hr />
      </div>
    );
  }
}

export default Contact;
