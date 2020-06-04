import React from "react";
import { Link } from "@reach/router";

import "../styles/Navbar.scss";

import NavbarDropdown from "./NavbarDropdown";

const Navbar = ({ show }) => (
  <nav className={`navbar ${show ? "navbar--collapse" : ""}`}>
    <Link to="/" className="navlink">
      Home
    </Link>
    <NavbarDropdown className="navbar dropdown-container" title="New">
      <Link to="/new/sku" className="navlink">
        New SKUs
      </Link>
      <Link to="/new/uniq" className="navlink">
        New UNIQ
      </Link>
      <Link to="/new/bin" className="navlink">
        New Bin
      </Link>
    </NavbarDropdown>
    <Link to="/move" className="navlink">
      Move
    </Link>
    <Link to="/recieve-sku" className="navlink">
      Recieve SKU
    </Link>
    <Link to="/search" className="navlink">
      Search
    </Link>
  </nav>
);

export default Navbar;
