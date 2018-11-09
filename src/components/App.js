import React from "react"
import {Route} from "react-router-dom"

const App = () => (
  <div>
    <Route path="/a" render={() => <p>a</p>}/>
    <Route path="/b" render={() => <p>b</p>}/>
  </div>
)

export default App
