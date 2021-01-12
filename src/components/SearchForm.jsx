import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { parse, stringify } from "query-string";
import { navigate } from "@reach/router";

import SearchResults from "./SearchResults";

import * as actions from "../actions";
// import defaultState from "../defaultState";

import "../styles/forms.scss";
import "../styles/pager.scss";
import { Pager } from "./Pager";

const PAGE_ITEMS_LIMIT = 20;

function SearchForm({
  location,
  searchQuery,
  setSearchQuery,
  setSearchResults,
  numPages,
}) {
  const [inputValue, setInputValue] = useState(searchQuery);

  // get url parameters
  let { query: urlQuery, page: urlPage } = parse(location.search);
  urlPage = parseInt(urlPage) || 1;

  // keep redux state and inputValue in sync with url parameters only when url changes
  useEffect(() => {
    setSearchQuery(urlQuery);
    setInputValue(urlQuery);
    setSearchResults(null);
  }, [urlQuery, setSearchQuery, setSearchResults, setInputValue]);

  // whenever page or query changes, fetch new search results
  useEffect(() => {
    searchQuery &&
      fetch(
        `/api/search?${stringify({
          query: searchQuery,
          startingFrom: (urlPage - 1) * PAGE_ITEMS_LIMIT,
          limit: PAGE_ITEMS_LIMIT,
        })}`
      )
      .then((response) => response.json())
      .then(json => json.state)
      .then(setSearchResults);
  }, [searchQuery, setSearchQuery, setSearchResults, urlPage]);

  return (
    <React.Fragment>
      <form
        action="/search"
        method="GET"
        className="form"
        autoComplete="off"
        onSubmit={(event) => {
          navigate(`/search?${stringify({ query: inputValue })}`);
          event.preventDefault();
        }}
      >
        <input
          id="search-input"
          type="text"
          name="query"
          className="form-input search-input"
          value={inputValue || ""}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <input className="form-submit" type="submit" value="Search" />
      </form>

      <SearchResults />
      <Pager
        currentPage={urlPage}
        numPages={numPages}
        linkHref={`/search?${stringify({ query: urlQuery })}&page=`}
      />
    </React.Fragment>
  );
}

const mapStateToProps = (storeState) => ({
  searchQuery: storeState.searchQuery,
  numPages:
    storeState.searchResults &&
    Math.ceil(storeState.searchResults.total_num_results / PAGE_ITEMS_LIMIT),
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
