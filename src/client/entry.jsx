import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from "redux";

import Root from "../components/App";
import reducers from "../reducers";

const preloadedState = window.__PRELOADED_STATE__; // injected ssr
const store = createStore(reducers, preloadedState); // TODO: add redux dev tools back to this

const render = (Component) => {
  (module.hot ? ReactDOM.render : ReactDOM.hydrate)(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById("react-root")
  );
};

render(Root);

if (module.hot) {
  module.hot.accept("../components/App", () => {
    render(Root);
  });
}
