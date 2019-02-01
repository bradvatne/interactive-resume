import React, { Component } from "react";

export class Education extends Component {
  render() {
    return (
      <div className="container">
      <div className="fadeIn">
        <h1>EDUCATION</h1><br/><p></p><br/><hr/>
        <div className="experiences-box">
          <div className="experiences-title">
            <p>
              <strong>UNIVERSITY OF VICTORIA</strong>
              <br />
              <br />
              Sept 2009 - April 2011,
              <br />
              May 2018 - Present
            </p>
          </div>
          <div className="experiences-description">
            <p>
              <strong>
                BACHELOR OF SCIENCE - COMPUTER SCIENCE AND PSYCHOLOGY (COMBINED)
              </strong>
              <br />
              <br />I studied general sciences in my first two years, including
              classes such as; calculus, physics, organic chemistry, biology and
              psychology. Feeling a lack of direction, I took a few years off
              before returning enthusiastically to pursue a combined major of
              Computer Science and Psychology. <br />
              The GPA of courses taken since my return is currently 3.8 .
            </p>
          </div>
        </div>
        <hr />
      </div>
      </div>
    );
  }
}

export default Education;
