import React from "react"
import {Route, NavLink} from "react-router-dom"

import Logo from '../img/logo.svg';
import InlineSVG from 'svg-inline-react';

import '../styles/App.css'

import NewThingForm from './NewThingForm'
import MoveThingForm from './MoveThingForm'
import SearchForm from './SearchForm'
import FlashMessage from './FlashMessage'

const App = () => (
  <div className="wrapper">
    <InlineSVG src={Logo} className="logo"/>
    <nav>
      <NavLink to="/new/thing" className="navlink" activeClassName="navlink--selected">New</NavLink>
      <NavLink to="/move/thing" className="navlink" activeClassName="navlink--selected">Move</NavLink>
      <NavLink to="/search" className="navlink" activeClassName="navlink--selected">Search</NavLink>
    </nav>
    <Route path="/new/thing" component={NewThingForm}/>
    <Route path="/move/thing" component={MoveThingForm}/>
    <Route path="/search" component={SearchForm}/>
    <Route path="/new/thing" component={FlashMessage}/>
  </div>
)

export default App
