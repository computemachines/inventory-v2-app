import React from "react";

import Unit from "./Unit";

function SearchResults({ results }) {
  return (
    <ul className="search-results">
      {results.map((result) => (
        <Unit key={result.id} json={result} />
      ))}
    </ul>
  );
}

// SearchResults.propTypes = {
//   results: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };
// SearchResults.defaultProps = {
//   results: [],
// };

export default SearchResults;
