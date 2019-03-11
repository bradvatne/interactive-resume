import React from "react";
import Portrait from "../brad.jpg";
import content from "../content.json"

const Profile = () => {
  return (
    <div className="fadeIn">
    <hr/>
      <div className="aboutme-boxes">
        <div className="aboutme-box1">
          <br />
          <p>
          Brad Vatne is a full-time student at the University of Victoria, graduating in Fall of 2020 with a Bachelor of Science in Computer Science and Psychology as a combined major.<br/><br/> In his spare time, he enjoys trying out new restaurants with his girlfriend, reading, running, hiking, practicing yoga, listening to podcasts, and writing code of all sorts. <br/><br/>Throughout his life, he has carried a strong passion for creative expression. He finds that software development combines an opportunity to release his creative energy while simultaneously challenging himself intellectually. Naturally, he has fallen in love with it. <br/><br/>He has chosen Javascript as his main language because of its versatility and wide range of libraries, especially React. In the future, he has plans to learn cross-platform libraries like React-Native and Electron.
          </p>
        </div>
        <div className="aboutme-box2">
          <img src={Portrait} alt="Brad's Portrait" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
