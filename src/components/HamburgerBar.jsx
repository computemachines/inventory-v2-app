import React, { useState } from "react";

import Navbar from "./Navbar";

const HamburgerButton = ({ onClick, show }) => (
  <button
    className={`hamburger hamburger--squeeze ${show ? "is-active" : ""}`}
    type="button"
    onClick={onClick}
    aria-label="Menu"
    aria-controls="navigation"
  >
    <span className="hamburger-label">Menu</span>
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
);

const HamburgerBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed-bar">
      <div className="branding">
        <div className="logo" />
        <h2>Inventory App</h2>
        <HamburgerButton onClick={() => setShow(!show)} show={show} />
      </div>
      <Navbar show={show} />
    </div>
  );
};

export default HamburgerBar;
