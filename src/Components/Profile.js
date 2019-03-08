import React, { Component } from "react";
import Portrait from "./brad.jpg";


export class Profile extends Component {
  render() {
    return (
      <div className="fadeIn">
        <div className="aboutme-boxes">
          <div className="aboutme-box1">
            <br />
            <p>
              I'm currently a student at the University of Victoria in beautiful
              British Columbia. I took a gap in the middle of my degree to work,
              save money, travel the world, and soul search. During this time, I
              learned alot about myself and was inspired to head back to school
              to finish my degree. <br />
              <br />
              In my spare time, I enjoy trying out new restaurants with my
              girlfriend, reading, running, hiking, listening to podcasts, and
              writing code of all sorts. Throughout my life, I've carried a
              strong passion for creative expression. Programming combines an
              opportunity to release my creative energy while simultaneously
              challenging me intellectually. Naturally, I've fallen in love with
              it.
              <br />
              <br />I have chosen Javascript as my main language because of its
              versatility and wide range of libraries. At the moment, I am
              having a lot of fun learning React. In the future I have plans to
              learn Electron and React Native, because the power of
              cross-platform code is very appealing to me.
            </p>
          </div>
          <div className="aboutme-box2">
            <img src={Portrait} alt="Brad's Portrait" />
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
