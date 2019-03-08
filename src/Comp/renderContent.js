import React from "react";

//Refactored for modularity mar 7 2019

//Left Column of experienceBox, renders title and date
export const renderTitle = props => {
  return (
    <div className="experiences-title">
      <h3>{props.name}</h3>
      {props.url != undefined ? (
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
    <div className="experiences-box">
      {renderTitle(props)}
      {renderDescription(props)}
    </div>
  );
};
