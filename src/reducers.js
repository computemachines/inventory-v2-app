import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_BIN_DATA,
  SET_UNIQ_DATA,
  SET_SKU_DATA,
  SET_BATCH_DATA,
} from "./constants";
import initialState from "./defaultState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, { searchQuery: action.payload });
    case SET_SEARCH_RESULTS:
      return Object.assign({}, state, { searchResults: action.payload });
    case SET_BIN_DATA:
      return Object.assign({}, state, { binData: action.payload });
    case SET_UNIQ_DATA:
      return Object.assign({}, state, { uniqData: action.payload });
    case SET_SKU_DATA:
      return Object.assign({}, state, { skuData: action.payload });
    case SET_BATCH_DATA:
      return Object.assign({}, state, { batchData: action.payload });
    default:
      return state;
  }
};

export default rootReducer;
