import React from 'react'
import App from '../components/App'
import Message from '../components/Message'
import { StaticRouter } from "react-router-dom"
import { Provider } from "react-redux"


export const AppRoot = ({store, location, context}) => (
  <Provider store={store}>
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  </Provider>
)

export { default as reducers } from "../reducers"
export { setQuery, setSearchResults } from '../actions'
export { default as initialState } from "../initialState"
