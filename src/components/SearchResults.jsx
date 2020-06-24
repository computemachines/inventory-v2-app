import React from "react";
import { connect } from "react-redux";

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
  console.log("search results", results);
  return (
    <React.Fragment>
      {results === [] && <h3>Nothing Found</h3>}
      <ul className="search-results">
        {results &&
          results.map((result) => (
            <Unit preview key={result.id} json={result} />
          ))}
      </ul>
    </React.Fragment>
  );
};

// SearchResults.propTypes = {
//   results: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };
// SearchResults.defaultProps = {
//   results: [],
// };

export default connect((state) => ({ results: state.searchResults }))(
  SearchResults
);
