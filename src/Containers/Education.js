import React from "react";
import content from "../content";
import { renderContentBox } from "../Comp/renderContent";

const {uvic, fcc, tylerm} = content.education;

const Education = () => {
  return (
    <div className="fadeIn">
    <hr/>
      {renderContentBox(uvic)}
      {renderContentBox(fcc)}
      {renderContentBox(tylerm)}
    </div>
  );
};

export default Education;

