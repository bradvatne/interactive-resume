import React from "react";
import content from "../content";
import {renderLanguageTable, renderToolsTable} from "../Comp/renderContent"


const Knowledge = () => {
  return (
    <div className="fadeIn">
    <hr/>
    <div className="abilities-container">
      {renderLanguageTable(content.knowledge.languages)}
      {renderToolsTable()}
      </div>
      </div>
  );
};

export default Knowledge;
