import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from '../components/App'
import reducer from '../reducers'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// ReactDom.hydrate(App, document.getElementById('react-root'))
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root'))
