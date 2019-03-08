import React from "react";
import Portrait from "../brad.jpg";
import content from "../content.json"

const Profile = props => {
  return (
    <div className="fadeIn">
    <hr/>
      <div className="aboutme-boxes">
        <div className="aboutme-box1">
          <br />
          {content.aboutme}
          <p />
        </div>
        <div className="aboutme-box2">
          <img src={Portrait} alt="Brad's Portrait" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
