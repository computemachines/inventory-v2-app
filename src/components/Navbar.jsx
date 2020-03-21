import React from "react";
import { A } from "hookrouter";

import "../styles/Navbar.less";

import NavbarDropdownNew from "./NavbarDropdownNew";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <A
          href="/"
          className="navlink"
          activeClassName="navlink--selected"
          exact
        >
          Home
        </A>
      </li>
      <li>
        <NavbarDropdownNew />
      </li>
      <li>
        <A href="/move" className="navlink" activeClassName="navlink--selected">
          Move
        </A>
      </li>
      <li>
        <A
          href="/recieve-sku"
          className="navlink"
          activeClassName="navlink--selected"
        >
          Recieve SKU
        </A>
      </li>
      <li>
        <A
          href="/search"
          className="navlink"
          activeClassName="navlink--selected"
        >
          Search
        </A>
      </li>
    </ul>
  </nav>
);

export default Navbar;
