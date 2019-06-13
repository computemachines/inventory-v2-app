import React from "react"
import PropTypes from 'prop-types'

import SearchItem from './SearchItem'
import ErrorBoundary from './ErrorBoundary'

function SearchResults(props) {
  console.log(props)
  return (
    <ErrorBoundary>
      <ul className="search-results">
        {props.results.map(result => (
          <SearchItem key={result.key} {...result} />
        ))}
      </ul>
    </ErrorBoundary>
  )
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired
}

export default SearchResults
