import React from "react"

import SearchItem from './SearchItem'
import ErrorBoundary from './ErrorBoundary'

function SearchResults(props) {
  return (
    <ErrorBoundary>
      <div className="search-results">

      </div>
    </ErrorBoundary>
  )
}

export default SearchResults
