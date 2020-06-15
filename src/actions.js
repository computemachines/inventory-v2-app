import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_BIN_DATA,
  SET_UNIQ_DATA,
  SET_SKU_DATA,
  SET_BATCH_DATA,
  SET_NEXT_BIN,
  SET_NEXT_UNIQ,
  SET_NEXT_SKU,
  SET_NEXT_BATCH,
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
export const setNextBin = (nextBin) => ({
  type: SET_NEXT_BIN,
  payload: nextBin,
});
export const setNextUniq = (nextUniq) => ({
  type: SET_NEXT_UNIQ,
  payload: nextUniq,
});
export const setNextSku = (nextSku) => ({
  type: SET_NEXT_SKU,
  payload: nextSku,
});
export const setNextBatch = (nextBatch) => ({
  type: SET_NEXT_BATCH,
  payload: nextBatch,
});
