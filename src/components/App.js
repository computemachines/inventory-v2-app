import React from "react"
import {Route, NavLink} from "react-router-dom"

import '../styles/App.css'

const NewThingForm = () => (
  <form action="/api/things" method="POST">
    <input type="text" name="name"/>
    <input type="text" name="label"/>
    <input type="text" name="bin"/>
    <input type="submit" value="Submit"/>
  </form>
)

const MoveThingForm = () => (
  <form action="/api/thing" method="POST">
    <input type="hidden" name="_method" value="put"/>
    <input type="text" name="label"/>
    <input type="text" name="bin"/>
    <input type="submit" value="Submit"/>
  </form>
)



const App = () => (
  <div>
    <NavLink to="/new/thing">New Thing</NavLink>
    <NavLink to="/move/thing">Move Thing</NavLink>
    <Route path="/new/thing" component={NewThingForm}/>
    <Route path="/move/thing" component={MoveThingForm}/>
  </div>
)

export default App
