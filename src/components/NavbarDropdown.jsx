import React, { useState, useRef } from "react";

// import PropTypes from "prop-types";

export default function NavbarDropdown({ title, className, children }) {
  const [collapsed, setCollapsed] = useState(false);
  const titleEl = useRef(null);
  return (
    <React.Fragment>
      <button
        ref={titleEl}
        role="tree"
        className="navlink dropdown-title"
        onFocus={() => setCollapsed(false)}
        onClick={() => {
          titleEl.current.focus();
          setCollapsed(!collapsed);
        }}
        // eslint-disable-next-line no-unused-vars
        // onKeyUp={(e) => setCollapsed(!collapsed)}
      >
        {title}
      </button>
      <div
        onFocus={() => {
          setCollapsed(false);
        }}
        className={`${className} ${
          collapsed ? "dropdown-hide" : "dropdown-show"
        }`}
      >
        {children}
      </div>
    </React.Fragment>
  );
}

// NavbarDropdownNew.propTypes = {
//   location: PropTypes.shape().isRequired
// };
