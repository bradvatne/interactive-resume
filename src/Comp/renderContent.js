import React, {Fragment} from "react";
import content from "../content";

//Refactored for modularity mar 7 2019

//Left Column of experienceBox, renders title and date
export const renderTitle = props => {
  return (
    <div className="experiences-title">
      <h3>{props.name}</h3>
      {props.url !== undefined ? (
        <p>{certificate(props.url)}</p>
      ) : (
        <p>{props.date}</p>
      )}
    </div>
  );
};

//Right hand column, renders subheading and description
export const renderDescription = props => {
  return (
    <div className="experiences-description">
      <h4>{props.spec}</h4>
      <p>{props.description}</p>
    </div>
  );
};

//Formats and renders url certificate
export const certificate = url => {
  let thisUrl =
    "https://" + { url } + 'target="_blank" rel="noopener noreferrer';
  return (
    <a href={thisUrl}>
      <i className="fas fa-award" style={{ fontSize: "3rem" }} />
    </a>
  );
};

//Renders experiences box container
export const renderContentBox = props => {
  return (
    <Fragment>
      <div className="experiences-box">
        {renderTitle(props)}
        {renderDescription(props)}
      </div>
      <hr />
    </Fragment>
  );
};

export const renderLanguageTable = (props) => {
  
  // const langs = Object.keys(props)
  const levels = Object.values(props)
  // console.log(langs)
  console.log(levels)

  levels.map()


  return (
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
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export const renderToolsTable = props => {
  return (
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
  )
}


// export const renderLanguage = props => {

//   return (
//     <tr>
//       <td>{props.name}</td>
//       <td>
//         {stars.map(() => (
//           <i className="fa fa-star" aria-hidden="true" />
//         ))}
//       </td>
//     </tr>
//   );
// };

export const test = () => {
  for (let lang in content.knowledge.languages) console.log(lang.name);
};
