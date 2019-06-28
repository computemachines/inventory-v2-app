import { SET_QUERY, SET_SEARCH_RESULTS } from "./constants";

export const setQuery = query => ({
  type: SET_QUERY,
  query
});

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  searchResults
});
