import React, { Component } from 'react'
//TODO: Add scroll indicator

export class Employment extends Component {
    render() {
      return (
        <div className="fadeIn">
        <hr/>
        <h2>EMPLOYMENT</h2>
        <hr/>
          <div className="experiences-box">
            <div className="experiences-title">
              <p>
                <h3>MOVEMENT FOOD</h3>
                <br />
                <strong>June 2016 - Sept 2017</strong>
              </p>
            </div>
            <div className="experiences-description">
              <p>
                <h4>DIGITAL MARKETER</h4>
                <br />
                Handled digital marketing for a local eCommerce website generating
                over a million dollars yearly revenue. I handled the customer
                lifecycle with a strategic funnel of web applications. I performed
                AdWords keyword research and PPC optimization, employed
                retargeting campaigns with Facebook/Instagram advertising, used
                MailChimp to convert captured leads and retain customers, and
                provided general advice in all manners of marketing
              </p>
            </div>
            
          </div>
          <hr/>
          <div className="experiences-box">
            <div className="experiences-title">
              <p>
                <h3>INDEPENDENT</h3>
                <br />
                <strong>April 2016 - Sept 2017</strong>
              </p>
            </div>
            <div className="experiences-description">
              <p>
                <h4>FREELANCE DIGITAL MARKETER</h4>
                <br />
                Consulted a wide variety of eCommerce businesses with their
                Facebook advertising optimization. My ability to work
                independently, meet deadlines, communicate, and provide detailed
                reports of key-performance indicators were vital skills.
              </p>
            </div>
          </div>
          <hr/>
          <div className="experiences-box">
            <div className="experiences-title">
              <p>
                <h3>CITY OF VANCOUVER</h3>
                <br />
                <strong>April 2013 - Jan 2017</strong>
              </p>
            </div>
            <div className="experiences-description">
              <p>
                <h4>TRUCK DRIVER</h4>
                <br />
                Served the public as a recycling collector employed by the
                municipal government. Developed a strict conscientious attitude
                through crucial daily maintenance inspections.
              </p>
            </div>
          </div>
          <hr/>
        </div>
      );
    }
  }

export default Employment
