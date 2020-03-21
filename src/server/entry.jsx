import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import App from "../components/App";

export const AppRoot = ({ store /*, location, context*/ }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRoot.propTypes = {
  store: PropTypes.shape.isRequired,
  location: PropTypes.shape.isRequired,
  context: PropTypes.shape.isRequired
};

export { default as reducers } from "../reducers";
export { setQuery, setSearchResults } from "../actions";
export { default as initialState } from "../defaultState";
