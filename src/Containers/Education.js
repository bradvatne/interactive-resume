import React, { Fragment } from "react";
import content from "../content";
import { renderContentBox } from "../Comp/renderContent";

const [uvic, fcc, tylerm] = content;

const Education = () => {
  return (
    <Fragment>
      {renderContentBox(uvic)}
      <hr />
      {renderContentBox(fcc)}
      <hr />
      {renderContentBox(tylerm)}
      <hr />
    </Fragment>
  );
};

export default Education;
