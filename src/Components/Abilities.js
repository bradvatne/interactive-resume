import React, { Component } from "react";

export class Abilities extends Component {
  render() {

    return (

      <div className="fadeIn">

        <hr />
        <h2>ABILITIES</h2>
        <hr/>
        <div className="abilities-container">
        <table>
        <tr>
          <th><h3>LANGUAGE</h3></th>
          <th><h3>LEVEL</h3></th>
        </tr>
        <tr>
        <td>HTML</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>CSS</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>Javascript</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>React</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>Python</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        <tr>
        <td>Java</td>
        <td><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half" aria-hidden="true"></i></td>
        </tr>
        </table>
        <hr/>
        <table>
        <tr>
          <th><h3>GENERAL TRAITS</h3></th>
          <th> </th>
        </tr>
        <tr>
        <td>Passionate</td>
        <td>Motivated</td>
        </tr>
        <tr>
        <td>Problem Solver</td>
        <td>Team Player</td>
        </tr>
        <tr>
        <td>Communicative</td>
        <td>Honest</td>
        </tr>
        <tr>
        <td>Resourceful</td>
        <td>Conscientious</td>
        </tr>
        <tr>
        <td>Sociable</td>
        <td>Respectful</td>
        </tr>
        <tr>
        <td>Resilient</td>
        <td>Positive Attitude</td>
        </tr>
        </table>
      </div>
      </div>
    );
  }
}

export default Abilities;
