import React from "react";

import Navbar from "./Navbar";

const HamburgerButton = ({ onClick, show }) => (
  <button
    className={`hamburger hamburger--collapse test ${show ? "is-active" : ""}`}
    type="button"
    onClick={onClick}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
);

export default class HamburgerBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({ show: !state.show }));
  }
  render() {
    return (
      <div className="fixed-bar">
        <div className="branding">
          <div className="logo" />
          <h2>Inventory App</h2>
          <HamburgerButton onClick={this.handleClick} show={this.state.show} />
        </div>
        <Navbar />
      </div>
    );
  }
}
