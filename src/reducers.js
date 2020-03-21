import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_BIN_DATA
} from "./constants";
import * as initialState from "./defaultState";

import { combineReducers } from "redux";

const search = (state = initialState.search, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, {
        payload: action.query
      });
    case SET_SEARCH_RESULTS:
      return Object.assign({}, state, {
        payload: action.searchResults
      });
    default:
      return state;
  }
};

const units = (state = initialState.units, action) => {
  switch (action.type) {
    case SET_BIN_DATA:
      return Object.assign({}, state, {
        payload: action.binData
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers({ search, units });
export default rootReducer;
