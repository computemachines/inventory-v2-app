import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_BIN_DATA
} from "./constants";
import initialState from "./defaultState";

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, {
        payload: action.query
      });
    case SET_SEARCH_RESULTS:
      return Object.assign({}, state, {
        payload: action.searchResults
      });
    case SET_BIN_DATA:
      return Object.assign({}, state, {
        payload: action.binData
      });
    default:
      return state;
  }
}
