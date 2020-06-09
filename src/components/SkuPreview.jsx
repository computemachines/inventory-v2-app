import React from "react";

const SkuPreview = ({ json: jsonData }) => {
  console.log(jsonData);
  return (
    <div className="search-preview">
      <h3>
        {jsonData.id} {jsonData.name}
      </h3>
    </div>
  );
};

export default SkuPreview;
