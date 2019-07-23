import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class NavbarDropdownNew extends React.Component {
  constructor({ location }) {
    super({ location });
    this.state = { hidden: true };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname.startsWith("/new")) {
      this.setState({ hidden: false });
    }
  }

  render() {
    const { hidden } = this.state;
    return (
      <React.Fragment>
        <button
          className={`navlink dropdown-btn ${
            hidden ? "dropdown-hide" : "dropdown-show"
          }`}
          type="button"
          onClick={() => {
            this.setState(state => ({
              hidden: !state.hidden
            }));
          }}
        >
          New
        </button>
        <ul
          className={`dropdown-container ${
            hidden ? "dropdown-hide" : "dropdown-show"
          }`}
        >
          <li>
            <NavLink
              to="/new/sku"
              className="navlink"
              activeClassName="navlink--selected"
            >
              New SKU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new/uniq"
              className="navlink"
              activeClassName="navlink--selected"
            >
              New UNIQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new/bin"
              className="navlink"
              activeClassName="navlink--selected"
            >
              New Bin
            </NavLink>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

NavbarDropdownNew.propTypes = {
  location: PropTypes.shape().isRequired
};

export default withRouter(NavbarDropdownNew);
