import React, { Component } from "react";

export class Education extends Component {
  render() {
    return (
      <div className="fadeIn">
        <hr />
        <h2>FORMAL EDUCATION</h2>
        <hr />
        <div className="experiences-box">
          <div className="experiences-title">
            <p>
              <h3>UNIVERSITY OF VICTORIA</h3>
              <br />
              Sept 2009 - April 2011,
              <br />
              May 2018 - Present
            </p>
          </div>
          <div className="experiences-description">
            <p>
              <h4>
                BACHELOR OF SCIENCE - COMPUTER SCIENCE AND PSYCHOLOGY (COMBINED)
              </h4>
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
        <h2>ONLINE COURSES</h2>
        <hr/>
        <div className="experiences-box">
          <div className="experiences-title">
          <h3>FreeCodeCamp</h3>
          <br/>
          <a
            href="https://www.freecodecamp.org/certification/scradley/responsive-web-design"
            target="_blank"
          ><i class="fas fa-award" style={{fontSize: "3rem"}}></i></a>
           
          </div>
          <div className="experiences-description">
            <p>
              <h4>
                RESPONSIVE WEB DESIGN
              </h4>
              <br />Basic HTML and HTML5, CSS, Applied Visual Design, Applied Accesibility, Responsive Web Design Principles, CSS Flexbox, CSS Grid, Responsive Web Design Projects.<br />
        
            </p>
          </div>
        </div>

        
        <hr/>
     
      </div>
    );
  }
}

export default Education;
