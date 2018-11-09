import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from "react-router-dom"

import App from '../components/App'

// ReactDom.hydrate(App, document.getElementById('react-root'))
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('react-root'))
