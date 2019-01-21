import React from "react"

import SearchItem from './SearchItem'

function SearchResults(props) {
  return (
    <div className="search-results">
      {props.results.map(result => <SearchItem key={result.label} {...result}/>)}
    </div>
  )
}

export default SearchResults
