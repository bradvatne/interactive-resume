import React from "react";
import content from "../content";
import { renderContentBox } from "../Comp/renderContent";

const {movement, independent, cov} = content.employment;

const Employment = () => {
  return (
    <div className="fadeIn">
    <hr/>
      {renderContentBox(movement)}
      {renderContentBox(independent)}
      {renderContentBox(cov)}
    </div>
  );
};

export default Employment;
