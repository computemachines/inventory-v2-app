import React from "react";
import { A } from "hookrouter";

// import PropTypes from "prop-types";

export default function NavbarDropdownNew() {
  return (
    <React.Fragment>
      <ul className="dropdown-container dropdown-show">
        <li>
          <A
            href="/new/sku"
            className="navlink"
            activeClassName="navlink--selected"
          >
            New SKU
          </A>
        </li>
        <li>
          <A
            href="/new/uniq"
            className="navlink"
            activeClassName="navlink--selected"
          >
            New UNIQ
          </A>
        </li>
        <li>
          <A
            href="/new/bin"
            className="navlink"
            activeClassName="navlink--selected"
          >
            New Bin
          </A>
        </li>
      </ul>
    </React.Fragment>
  );
}

// NavbarDropdownNew.propTypes = {
//   location: PropTypes.shape().isRequired
// };
