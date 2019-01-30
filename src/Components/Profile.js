import React, { Component } from 'react';
import Portrait from './brad.jpg'

export class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="aboutme">
            <h1>Profile</h1>
            <p>University student, world traveller, aspiring web developer.</p>
            <div className="aboutme-boxes">
                <div className="aboutme-box">
                    <h2>About me</h2>
                    <p>Test test test</p>
                </div>
                <div className="aboutme-box">
                    <img src={Portrait} alt="Brad's Portrait"/>
                </div>
                <div className="aboutme-box">
                    <h2>Details</h2>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Profile
