import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_BIN_DATA,
  SET_SKU_DATA,
  SET_BATCH_DATA,
  SET_NEXT_BIN,
  SET_NEXT_SKU,
  SET_NEXT_BATCH,
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
    case SET_SKU_DATA:
      return Object.assign({}, state, { skuData: action.payload });
    case SET_BATCH_DATA:
      return Object.assign({}, state, { batchData: action.payload });
    case SET_NEXT_BIN:
      return Object.assign({}, state, { nextBin: action.payload });
    case SET_NEXT_SKU:
      return Object.assign({}, state, { nextSku: action.payload });
    case SET_NEXT_BATCH:
      return Object.assign({}, state, { nextBatch: action.payload });
    default:
      return state;
  }
};

export default rootReducer;
