import React from "react";

import Bin from "./Bin";
import Sku from "./Sku";
import Batch from "./Batch";
import Uniq from "./Uniq";

const Unit = ({ json, preview }) => {
  console.log(json);
  if (json.id.startsWith("BIN")) {
    return <Bin {...{ preview }} bin_id={json.id} />;
  }
  if (json.id.startsWith("SKU")) {
    return <Sku {...{ preview }} json={json} />;
  }
  if (json.id.startsWith("BAT")) {
    return <Batch {...{ preview }} json={json} />;
  }
  if (json.id.startsWith("UNIQ")) {
    return <Uniq {...{ preview }} json={json} />;
  }
  return <p>BAD</p>;
};

const SearchResults = ({ results }) => {
  return (
    <ul className="search-results">
      {results.map((result) => (
        <Unit preview key={result.id} json={result} />
      ))}
    </ul>
  );
};

// SearchResults.propTypes = {
//   results: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };
// SearchResults.defaultProps = {
//   results: [],
// };

export default SearchResults;
