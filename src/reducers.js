import { SET_QUERY, SET_SEARCH_RESULTS } from "./constants";
import initialState from "./defaultState";

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return Object.assign({}, state, {
        query: action.query
      });
    case SET_SEARCH_RESULTS:
      return Object.assign({}, state, {
        searchResults: action.searchResults
      });
    default:
      return state;
  }
}
