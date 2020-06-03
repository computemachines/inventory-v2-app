import React from "react";
import { Link } from "@reach/router";

// import PropTypes from "prop-types";

export default function NavbarDropdownNew() {
  return (
    <React.Fragment>
      <ul className="dropdown-container dropdown-show">
        <li>
          <Link
            to="/new/sku"
            className="navlink"
            activeClassName="navlink--selected"
          >
            New SKU
          </Link>
        </li>
        <li>
          <Link
            to="/new/uniq"
            className="navlink"
            activeClassName="navlink--selected"
          >
            New UNIQ
          </Link>
        </li>
        <li>
          <Link
            to="/new/bin"
            className="navlink"
            activeClassName="navlink--selected"
          >
            New Bin
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

// NavbarDropdownNew.propTypes = {
//   location: PropTypes.shape().isRequired
// };
