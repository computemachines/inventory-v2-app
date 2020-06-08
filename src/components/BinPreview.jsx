import React from "react";

const BinPreview = ({ json: jsonData }) => {
  console.log(jsonData);
  return (
    <div className="search-preview">
      <h3>{jsonData.id}</h3>
      <h4>
        Contents: {jsonData.contents.length === 0 ? "Empty" : jsonData.contents}
      </h4>
    </div>
  );
};

export default BinPreview;
