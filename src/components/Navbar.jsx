import React, { useRef, useEffect } from "react";
import { Link } from "@reach/router";

import "../styles/Navbar.scss";

import NavbarDropdown from "./NavbarDropdown";

// eslint-disable-next-line no-unused-vars
const Navbar = ({ show, setShow }) => {
  const myRef = useRef(null);

  useEffect(
    () =>
      console.log(
        "show: ",
        show,
        "navBarRef.current.style.height: ",
        myRef.current.clientHeight
      ),
    []
  );

  return (
    <nav
      onBlur={() => setShow(false)}
      onFocus={() => setShow(true)}
      ref={myRef}
      className={`navbar ${show ? "show" : "hide"}`}
    >
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
      <Link to="/receive" className="navlink">
        Receive
      </Link>
      <Link to="/search" className="navlink">
        Search
      </Link>
    </nav>
  );
};

export default Navbar;
