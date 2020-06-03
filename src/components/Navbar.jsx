import React from "react";
import { Link } from "@reach/router";

import "../styles/Navbar.scss";

import NavbarDropdownNew from "./NavbarDropdownNew";

const Navbar = ({ show }) => (
  <nav className={`navbar ${show ? "navbar-collapse" : ""}`}>
    <ul>
      <li>
        <Link
          to="/"
          className="navlink"
          activeClassName="navlink--selected"
          exact="true"
        >
          Home
        </Link>
      </li>
      <li>
        <NavbarDropdownNew />
      </li>
      <li>
        <Link
          to="/move"
          className="navlink"
          activeClassName="navlink--selected"
        >
          Move
        </Link>
      </li>
      <li>
        <Link
          to="/recieve-sku"
          className="navlink"
          activeClassName="navlink--selected"
        >
          Recieve SKU
        </Link>
      </li>
      <li>
        <Link
          to="/search"
          className="navlink"
          activeClassName="navlink--selected"
        >
          Search
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
