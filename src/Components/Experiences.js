import React, { Component } from 'react'

export class Experiences extends Component {
  render() {
    return (
      <div className="container">
          <h1>Experiences</h1><br/><p>LEARN, EARN, EXPLORE, REPEAT</p><br/><hr/><br/>
          <div className="overflow">
          <h3 className="left">EDUCATION</h3><br/>
                <div className="experiences-box">
                    <div className="experiences-title"><p><strong>UNIVERSITY OF VICTORIA</strong><br/><br/>Sept 2009 - April 2011,<br/>May 2018 - Present</p></div>
                    <div className="experiences-description"><p><strong>BACHELOR OF SCIENCE - COMPUTER SCIENCE AND PSYCHOLOGY (COMBINED)</strong><br/><br/>I studied general sciences in my first two years, including classes such as; calculus, physics, organic chemistry, biology and psychology. Feeling a lack of direction, I took a few years off before returning enthusiastically to pursue a combined major of Computer Science and Psychology. <br/>The GPA of courses taken since my return is currently 3.8 .</p></div>
                </div><hr/>

          <h3 className="left">EMPLOYMENT</h3><br/>
                <div className="experiences-box">
                    <div className="experiences-title"><p><strong>MOVEMENT FOOD</strong><br/><br/>June 2016 - Sept 2017</p></div>
                    <div className="experiences-description"><p><strong>Digital Marketer</strong><br/><br/>Handled digital marketing for a local eCommerce website generating over a million dollars yearly revenue. I handled the customer lifecycle with a strategic funnel of web applications. I performed AdWords keyword research and PPC optimization, employed retargeting campaigns with Facebook/Instagram advertising, used MailChimp to convert captured leads and retain customers, and provided general advice in all manners of marketing</p></div>
                </div>
          <div className="experiences-box">
              <div className="experiences-title"><p><strong>INDEPENDANT</strong><br/><br/>April 2016 - Sept 2017</p></div>
              <div className="experiences-description"><p><strong>FREELANCE DIGITAL MARKETING</strong><br/><br/>Consulted a wide variety of eCommerce businesses with their Facebook advertising  optimization. My ability to work independently, meet deadlines, communicate, and provide detailed reports of key-performance indicators were vital skills.</p></div>
          </div>

          <div className="experiences-box">
              <div className="experiences-title"><p><strong>CITY OF VANCOUVER</strong><br/><br/>April 2013 - Jan 2017</p></div>
              <div className="experiences-description"><p><strong>TRUCK DRIVER</strong><br/><br/>Served the public as a recycling collector employed by the municipal government. Developed a strict conscientious attitude through crucial daily maintenance inspections.</p></div>
          </div>
                </div>
                </div>
    )
  }
}

export default Experiences
