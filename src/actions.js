import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_BIN_DATA,
  SET_UNIQ_DATA,
  SET_SKU_DATA,
  SET_BATCH_DATA,
} from "./constants";

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
export const setSearchResults = (searchResults) => ({
  type: SET_SEARCH_RESULTS,
  payload: searchResults,
});
export const setBinData = (binData) => ({
  type: SET_BIN_DATA,
  payload: binData,
});
export const setUniqData = (uniqData) => ({
  type: SET_UNIQ_DATA,
  payload: uniqData,
});
export const setSkuData = (skuData) => ({
  type: SET_SKU_DATA,
  payload: skuData,
});
export const setBatchData = (batchData) => ({
  type: SET_BATCH_DATA,
  payload: batchData,
});
