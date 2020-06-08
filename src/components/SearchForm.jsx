import React from "react";
import { connect } from "react-redux";
import { parse, stringify } from "query-string";
import { navigate } from "@reach/router";

import SearchResults from "./SearchResults";

import * as actions from "../actions";
import defaultState from "../defaultState";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
   * There should be a couple paths through the UI.
   * 1. Client side:
   *     IF user navigates to /search
   *     THEN
   *      on render() query should be "",
   *      on render() searchResults should be []
   * 2. Client side:
   *     IF
   *      user navigates to /search
   *      user types a search query and submits.
   *     THEN
   *      on render() query should be the entered search query
   *      on render() search results should be retrieved async
   *      url should be updated ?q=query
   *      history should have new url pushed
   * 3. Server side:
   *     IF
   *      user requests /search
   *     THEN
   *      on render() query should be "",
   *      on render() searchResults should be []
   * 4. Server side:
   *     IF
   *      user requests /search?q=query
   *     THEN
   *      on render() query should be "query"
   *      on render() searchResults should be loaded syncronously
   */
  componentDidMount() {
    const { location, query, setSearchQuery, searchResults } = this.props;
    const { query: urlQuery } = parse(location.search);

    // if urlQuery is set and this is running on the server side (store.query will still be default)
    if (query === null && typeof urlQuery !== "undefined") {
      setSearchQuery(urlQuery); // used to set the input element's actual value
    }

    // if searchResults havent loaded yet and urlQuery is set
    if (
      searchResults === defaultState.searchResults &&
      typeof urlQuery !== "undefined"
    ) {
      this.retrieveSearchResults(urlQuery);
    }
  }

  retrieveSearchResults(query) {
    console.log("Query", query);
    const { setSearchResults } = this.props;

    fetch(`/api/search?${stringify({ query })}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data));

    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", url, true);
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     setSearchResults(JSON.parse(xhr.responseText));
    //   }
    //   if (xhr.status !== 200) {
    //     console.error(xhr);
    //   }
    // };
    // xhr.send();
  }

  handleSubmit(event) {
    const { query } = this.props;
    const queryString = stringify({ query });

    navigate(`/search?${queryString}`);
    this.retrieveSearchResults(query);

    event.preventDefault();
  }

  render() {
    const { query, setSearchQuery, searchResults } = this.props;
    return (
      <React.Fragment>
        <form
          action="/api/search"
          method="GET"
          className="form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <input
            id="search-input"
            type="text"
            name="query"
            className="form-input search-input"
            value={query === null ? "" : query}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <input className="form-submit" type="submit" value="Search" />
        </form>

        <SearchResults results={searchResults || []} />
      </React.Fragment>
    );
  }
}

// SearchForm.propTypes = {
//   location: PropTypes.shape().isRequired,
//   history: PropTypes.shape().isRequired,
//   query: PropTypes.string.isRequired,
//   searchResults: PropTypes.arrayOf().isRequired,
//   setQuery: PropTypes.func.isRequired,
//   setSearchResults: PropTypes.func.isRequired,
// };

const mapStateToProps = (storeState) => ({
  query: storeState.searchQuery,
  searchResults: storeState.searchResults,
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
