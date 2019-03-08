import React from "react";
import content from "../content";
import {test, renderLanguageTable, renderToolsTable} from "../Comp/renderContent"


const Knowledge = () => {

  test()
  return (
    <div className="fadeIn">
      {renderLanguageTable(content.knowledge.languages)}
      {renderToolsTable()}
      </div>
  );
};

export default Knowledge;
