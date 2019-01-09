import React from "react"

function SearchResults(results) {
  return (
    <ol className="search-results">
      {""+results.results}
    </ol>
  )
}

export default SearchResults
