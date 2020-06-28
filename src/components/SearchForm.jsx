import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { parse, stringify } from "query-string";
import { navigate, Link } from "@reach/router";

import SearchResults from "./SearchResults";

import * as actions from "../actions";
// import defaultState from "../defaultState";

import "../styles/forms.scss";
import "../styles/pager.scss";

const PAGE_ITEMS_LIMIT = 20;

function Pager({ page, numPages, linkHref }) {
  const shownPageLinks = [page - 2, page - 1, page, page + 1, page + 2].filter(
    (p) => p >= 1 && p <= numPages
  );

  return (
    <div className="pager" style={numPages == 0 ? { display: "none" } : {}}>
      <span className="pager--note">Page:</span>
      {page - 2 > 1 ? (
        <Link to={linkHref + 1} className="pager--page-link">
          |&lt;
        </Link>
      ) : null}
      {page !== 1 ? (
        <Link to={linkHref + (page - 1)} className="pager--page-link">
          &lt;
        </Link>
      ) : null}
      {page - 2 > 1 ? "..." : null}
      {shownPageLinks.map((p) => (
        <Link
          to={linkHref + p}
          key={p}
          className={`pager--page-link ${
            p == page ? "pager--page-link__active" : ""
          }`}
        >
          {p}
        </Link>
      ))}
      {page + 2 < numPages ? "..." : null}
      {numPages > page ? (
        <Link to={linkHref + (page + 1)} className="pager--page-link">
          &gt;
        </Link>
      ) : null}
      {page + 2 < numPages ? (
        <Link to={linkHref + numPages} className="pager--page-link">
          &gt;|
        </Link>
      ) : null}
    </div>
  );
}

function SearchForm({ location, query, setSearchQuery, setSearchResults }) {
  let { query: urlQuery, page } = parse(location.search);
  page = parseInt(page) || 1;

  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    setSearchQuery(urlQuery);
    setSearchResults(null);
    setNumPages(0);

    query &&
      fetch(
        `/api/search?${stringify({
          query,
          startingFrom: (page - 1) * PAGE_ITEMS_LIMIT,
          limit: PAGE_ITEMS_LIMIT,
        })}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data);
          setNumPages(Math.ceil(data.total_num_results / PAGE_ITEMS_LIMIT));
        });
  }, [
    location.search,
    page,
    query,
    setSearchQuery,
    setSearchResults,
    urlQuery,
  ]);

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
      <Pager
        page={page}
        numPages={numPages}
        linkHref={`/search?${stringify({ query })}&page=`}
      />
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
