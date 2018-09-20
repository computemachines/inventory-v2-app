import React from 'react'
import ReactDOM from 'react-dom'

import App from '../components/App'
import Message from '../components/Message'

// ReactDom.hydrate(App, document.getElementById('react-root'))

ReactDOM.hydrate(<App />, document.getElementById('react-root'))
