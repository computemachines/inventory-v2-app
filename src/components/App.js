import React from "react"
import {Route, NavLink} from "react-router-dom"

import '../styles/App.css'

import NewSkuForm from './NewSkuForm'
import NewUniqForm from './NewUniqForm'
import NewBinForm from './NewBinForm'
import MoveUnitsForm from './MoveUnitsForm'
import ReceiveSkuForm from './ReceiveSkuForm'
import SearchForm from './SearchForm'
import Bin from './Bin'
import Uniq from './Uniq'
import Sku from './Sku'


const App = () => (
  <div className="wrapper">
    <nav>
      <NavLink to="/" className="navlink" activeClassName="navlink--selected">Home</NavLink>
      <NavLink to="/new/sku" className="navlink" activeClassName="navlink--selected">New SKU</NavLink>
      <NavLink to="/new/uniq" className="navlink" activeClassName="navlink--selected">New UNIQ</NavLink>
      <NavLink to="/new/bin" className="navlink" activeClassName="navlink--selected">New Bin</NavLink>
      <NavLink to="/move-units" className="navlink" activeClassName="navlink--selected">Move</NavLink>
      <NavLink to="/receive" className="navlink" activeClassName="navlink--selected">Recieve SKU</NavLink>
      <NavLink to="/search" className="navlink" activeClassName="navlink--selected">Search</NavLink></nav>
    <Route path="/new/sku" component={NewSkuForm}/>
    <Route path="/new/uniq" component={NewUniqForm}/>
    <Route path="/new/bin" component={NewBinForm}/>
    <Route path="/move-units" component={MoveUnitsForm}/>
    <Route path="/receive" component={ReceiveSkuForm}/>
    <Route path="/search" component={SearchForm}/>
    <Route path="/bin" component={Bin}/>
    <Route path="/uniq" component={Uniq}/>
    <Route path="/sku" component={Sku}/>
  </div>
)

export default App
