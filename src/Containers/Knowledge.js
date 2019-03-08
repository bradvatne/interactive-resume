import React from "react";
import content from "../content";

const Knowledge = () => {

  const { languages } = content.knowledge;
  const stars = [];
  const languagesArray = [];

  const renderLanguage = props => {

    for (let i = 0; i < props.level; i++) {
      stars.push(i);
    }

    for (let language in languages) {
      languagesArray.push(language.name);
    }

    return (
      <tr>
        <td>{props.name}</td>
        <td>
          {stars.map(() => (
            <i className="fa fa-star" aria-hidden="true" />
          ))}
        </td>
      </tr>
    );
  };

  console.log(languages)
  console.log(languagesArray)
  const langs = languagesArray.map(language => renderLanguage(language))

  
  return (
    <div className="fadeIn">
      <hr />
      <div className="abilities-container">
        <table>
          <tbody>
            <tr>
              <th>
                <h3>LANGUAGE</h3>
              </th>
              <th>
                <h3>LEVEL</h3>
              </th>
            </tr>
            {langs}
          </tbody>
        </table>
        <hr />
        <table>
          <tbody>
            <tr>
              <th>
                <h3>TOOLS/CONCEPTS</h3>
              </th>
              <th> </th>
            </tr>
            <tr>
              <td>Github/Git</td>
              <td>NPM</td>
            </tr>
            <tr>
              <td>Axios</td>
              <td>AJAX</td>
            </tr>
            <tr>
              <td>SQLlite</td>
              <td>Django</td>
            </tr>
            <tr>
              <td>Redux</td>
              <td>React-Router</td>
            </tr>
            <tr>
              <td>Component Lifecycle</td>
              <td>Flexbox/Grid</td>
            </tr>
            <tr>
              <td>Functional Programs</td>
              <td>OOP's</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Knowledge;
