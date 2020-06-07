import { SET_SEARCH_QUERY, SET_SEARCH_RESULTS } from "./constants";
import initialState from "./defaultState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, {
        searchQuery: action.payload,
      });
    case SET_SEARCH_RESULTS:
      return Object.assign({}, state, {
        searchResults: action.payload,
      });
    default:
      return state;
  }
};

export default rootReducer;
