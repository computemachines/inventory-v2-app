import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "../styles/App.css";
import "normalize.css";

import NavbarDropdownNew from "./NavbarDropdownNew";
import NewSkuForm from "./NewSkuForm";
import NewUniqForm from "./NewUniqForm";
import NewBinForm from "./NewBinForm";
import MoveUnitsForm from "./MoveUnitsForm";
import ReceiveSkuForm from "./ReceiveSkuForm";
import SearchForm from "./SearchForm";
import Bin from "./Bin";
import Uniq from "./Uniq";
import Sku from "./Sku";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <div className="app-wrapper">
    <div className="sidebar">
      <div className="branding">
        <div className="logo" />
        <h2>Branding</h2>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className="navlink"
              activeClassName="navlink--selected"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavbarDropdownNew />
          </li>
          <li>
            <NavLink
              to="/move-units"
              className="navlink"
              activeClassName="navlink--selected"
            >
              Move
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/receive"
              className="navlink"
              activeClassName="navlink--selected"
            >
              Recieve SKU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className="navlink"
              activeClassName="navlink--selected"
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="main-content">
      <Switch>
        <Route path="/new/sku" component={NewSkuForm} />
        <Route path="/new/uniq" component={NewUniqForm} />
        <Route path="/new/bin" component={NewBinForm} />
        <Route path="/move-units" component={MoveUnitsForm} />
        <Route path="/receive" component={ReceiveSkuForm} />
        <Route path="/search" component={SearchForm} />
        <Route path="/bin/:id" component={Bin} />
        <Route path="/uniq" component={Uniq} />
        <Route path="/sku" component={Sku} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </div>
);

export default App;
