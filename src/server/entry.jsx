import React from "react";
import { Provider } from "react-redux";
import App from "../components/App";

export const AppRoot = ({ store /*, location, context*/ }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export { default as reducers } from "../reducers";
export { setQuery, setSearchResults } from "../actions";
export { default as initialState } from "../defaultState";
