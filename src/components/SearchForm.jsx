import React, { useEffect } from "react";
import { connect } from "react-redux";
import { parse, stringify } from "query-string";
import { navigate } from "@reach/router";

import SearchResults from "./SearchResults";

import * as actions from "../actions";
// import defaultState from "../defaultState";

function SearchForm({ location, query, setSearchQuery, setSearchResults }) {
  useEffect(() => {
    const query = parse(location.search).query;

    fetch(`/api/search?${stringify({ query })}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data));

    setSearchQuery(query);
  }, [location.search, setSearchQuery, setSearchResults]);

  return (
    <React.Fragment>
      <form
        action="/search"
        method="GET"
        className="form"
        autoComplete="off"
        onSubmit={(event) => {
          const queryString = stringify({ query });
          navigate(`/search?${queryString}`);
          event.preventDefault();
        }}
      >
        <input
          id="search-input"
          type="text"
          name="query"
          className="form-input search-input"
          value={query || ""}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <input className="form-submit" type="submit" value="Search" />
      </form>

      <SearchResults />
    </React.Fragment>
  );
}

const mapStateToProps = (storeState) => ({
  query: storeState.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchQuery(query) {
    dispatch(actions.setSearchQuery(query));
  },
  setSearchResults(searchResults) {
    dispatch(actions.setSearchResults(searchResults));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
