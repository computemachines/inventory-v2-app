import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_BIN_DATA
} from "./constants";

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  payload: searchResults
});

export const setBinData = binData => ({
  type: SET_BIN_DATA,
  payload: binData
});
