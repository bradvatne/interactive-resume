import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div className="fadeIn">
      <hr/>
      <h2>CONTACT</h2>
      <hr/>
        <div className="contact-boxes">
          <a href="mailto:bradvatne@gmail.com">
            <i class="far fa-envelope" />
          </a>
          <a href="https://www.github.com/notbrad">
            <i class="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/brad-vatne-525533179/">
            <i class="fab fa-linkedin-in" />
          </a>
        </div>
        <hr />
      </div>
    );
  }
}

export default Contact;
