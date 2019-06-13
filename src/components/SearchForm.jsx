import React from "react";
import { connect } from "react-redux";

import QueryString from "query-string";
// import $ from "jquery";n

import SearchResults from "./SearchResults";

import { setQuery, setSearchResults } from "../actions";
import initialState from "../initialState";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputState: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { query } = QueryString.parse(this.props.location.search);
    if (this.props.query === initialState.query) {
      this.setState({ inputState: query });
      this.props.setQuery(query);
    }
    if (
      this.props.loaded === initialState.loaded &&
      typeof query !== "undefined"
    ) {
      console.log("initial load");
      $.getJSON(
        `/api/search?${QueryString.stringify({ query })}`,
        null,
        (data, status) => {
          this.props.setSearchResults(data);
        }
      );
    }
  }

  handleSubmit(event) {
    const queryString = QueryString.stringify({ query: this.state.inputState });
    this.props.history.push(`/search?${queryString}`);
    $.getJSON(`/api/search?${queryString}`, null, (data, status) => {
      this.props.setSearchResults(data);
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ inputState: event.target.value });
  }

  render() {
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
            value={this.state.inputState}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>
        <SearchResults results={this.props.searchResults} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  setQuery,
  setSearchResults
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
