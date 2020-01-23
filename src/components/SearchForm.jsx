import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import QueryString from "query-string";

import SearchResults from "./SearchResults";

// import { setQuery, setSearchResults } from "../actions";
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
    const { location, query, setQuery, searchResults } = this.props;
    const { query: urlQuery } = QueryString.parse(location.search);

    // if urlQuery is set and this is running on the server side (store.query will still be default)
    if (query === defaultState.query && typeof urlQuery !== "undefined") {
      setQuery(urlQuery); // used to set the input element's actual value
    }

    // if searchResults havent loaded yet and urlQuery is set
    if (
      searchResults === defaultState.searchResults &&
      typeof urlQuery !== "undefined"
    ) {
      this.retrieveSearchResults(urlQuery);
    }

    window.onpopstate = e => {
      const { query: newurlQuery } = QueryString.parse(
        e.target.location.search
      );
      console.log(newurlQuery);
      setQuery(newurlQuery);
      this.retrieveSearchResults(newurlQuery);
    };
  }

  retrieveSearchResults(query) {
    const { setSearchResults } = this.props;
    const url = `/api/search?${QueryString.stringify({ query })}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        setSearchResults(JSON.parse(xhr.responseText));
      }
      if (xhr.status !== 200) {
        console.log(xhr);
      }
    };
    xhr.send();
  }

  handleSubmit(event) {
    const { query, history } = this.props;
    const queryString = QueryString.stringify({ query });

    history.push(`/search?${queryString}`);
    this.retrieveSearchResults(query);

    event.preventDefault();
  }

  render() {
    const { query, setQuery, searchResults } = this.props;
    return (
      <React.Fragment>
        <form
          action="/api/search"
          method="GET"
          className="inv-form"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <input
            id="search-input"
            type="text"
            name="query"
            className="inv-form__input"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
        <SearchResults results={searchResults !== null ? searchResults : []} />
      </React.Fragment>
    );
  }
}

SearchForm.propTypes = {
  location: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  query: PropTypes.string.isRequired,
  searchResults: PropTypes.arrayOf().isRequired,
  setQuery: PropTypes.func.isRequired,
  setSearchResults: PropTypes.func.isRequired
};

const mapStateToProps = storeState => ({
  query: storeState.query,
  searchResults: storeState.searchResults
});

const mapDispatchToProps = dispatch => ({
  setQuery(query) {
    dispatch(actions.setQuery(query));
  },
  setSearchResults(searchResults) {
    dispatch(actions.setSearchResults(searchResults));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
