/* eslint no-underscore-dangle: "off" */

import React from "react";
import { render, hydrate } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "../components/App";
import reducer from "../reducers";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(
  reducer,
  preloadedState,

  // TODO: IMPORTANT: somehow remove this in production.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ReactDom.hydrate(App, document.getElementById('react-root'))
(module.hot ? render : hydrate)(
  <Provider store={store}>
    {
      // // // TODO: fem says that provider should be inside router to make ssr //
      // easier
    }
    <App />
  </Provider>,
  document.getElementById("react-root")
);
