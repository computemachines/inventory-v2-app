import React, { useState } from "react";

import "../styles/Navbar.scss";

import Navbar from "./Navbar";

const HamburgerDropdown = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="hamburger-dropdown-container">
      <button
        className={`hamburger hamburger--squeeze ${show ? "is-active" : ""}`}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={() => setShow(!show)}
        onBlur={() => setShow(false)}
      >
        <span className="hamburger-label">Menu</span>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <Navbar show={show} setShow={setShow} />
    </div>
  );
};

const HamburgerBar = () => {
  return (
    <div className="fixed-bar">
      <div className="branding">
        <div className="logo" />
        <h2>Inventory App</h2>
      </div>
      <HamburgerDropdown />
    </div>
  );
};

export default HamburgerBar;
