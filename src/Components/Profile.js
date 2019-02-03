import React, { Component } from "react";
import Portrait from "./brad.jpg";
import App from "../App.js";

export class Profile extends Component {
  render() {


    return (
      <div className="fadeIn">
               <hr/>
        <h2>PROFILE</h2>
        <hr/>
        <div className="aboutme-boxes">
          <div className="aboutme-box1">
            <br />
            <p>
              I'm currently a student at the University of Victoria in beautiful
              British Columbia. I took a 6 year gap in the middle of my degree
              to work, save money, travel the world, and soul search. I learned
              alot about myself and was inspired to head back to school to
              finish my degree. <br />
              In my spare time, I enjoy trying out new restaurants with my
              girlfriend, reading, running, listening to podcasts, and writing
              code of all sorts.
            </p>
          </div>
          <div className="aboutme-box2">
            <img src={Portrait} alt="Brad's Portrait" />
          </div>
          {/* <div className="aboutme-box3">
            <h2>Details</h2>
            <p>
              <strong>NAME</strong>
              <br />
              Brad Vatne
              <br />
              <br />
              <strong>AGE</strong>
              <br />
              27
              <br />
              <br />
              <strong>
                LOCATION
                <br />
              </strong>
              Victoria, BC, Canada
              <br />
              <br />
              <strong>FAVORITE DESTINATION</strong>
              <br />
              Northern India
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Profile;
