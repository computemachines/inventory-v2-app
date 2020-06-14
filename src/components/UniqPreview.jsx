import React from "react";

const UniqPreview = ({ json: jsonData }) => {
  console.log(jsonData);
  return (
    <div className="search-preview">
      <h3>
        {jsonData.id} {jsonData.name}
      </h3>
    </div>
  );
};

export default UniqPreview;
