import React from "react";

import UnitPreview from "./UnitPreview";

const SearchResults = ({ results }) => {
  return (
    <ul className="search-results">
      {results.map((result) => (
        <UnitPreview key={result.id} json={result} />
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
