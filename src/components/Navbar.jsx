import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navbar.less";

import NavbarDropdownNew from "./NavbarDropdownNew";

export default () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink
          to="/"
          className="navlink"
          activeClassName="navlink--selected"
          exact
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
);
