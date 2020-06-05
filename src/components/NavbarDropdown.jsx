import React, { useState } from "react";

export default function NavbarDropdown({ title, className, children }) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <React.Fragment>
      <button
        role="tree"
        className="navlink dropdown-title"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
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
