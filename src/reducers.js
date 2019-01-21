import { SET_QUERY, SET_SEARCH_RESULTS } from './constants'
import initialState from './initialState'

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case SET_QUERY:
    return Object.assign({}, state, {query: action.query, searchResults: initialState.searchResults, loaded: false})
  case SET_SEARCH_RESULTS:
    return Object.assign({}, state, {searchResults: action.searchResults, loaded: true})
  default:
    return state
  }
}
