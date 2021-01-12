import React from "react";
import { Link } from "@reach/router";

export const Label = ({ link = true, label, inline }) => {
  const match = label.match(
    /^(?<prefix>BIN|SKU|BAT)(?<leadingZeroes>0*)(?<number>\d+)$/
  );
  const { prefix, number } = match.groups;
  const leadingZeros = match.groups.leadingZeroes || "";

  var unitUrl;
  switch (prefix) {
    case "BIN":
      unitUrl = "/bin/";
      break;
    case "SKU":
      unitUrl = "/sku/";
      break;
    case "BAT":
      unitUrl = "/batch/";
      break;
  }

  if (link) {
    return (
      <Link
        to={unitUrl + label}
        className={`item-description__label ${
          inline ? "item-description__label--inline" : ""
        }`}
      >
        {prefix}
        <span className="item-description__label--zeroes">{leadingZeros}</span>
        <span className="item-description__label--code">{number}</span>
      </Link>
    );
  } else {
    return (
      <div
        className={`item-description__label ${
          inline ? "item-description__label--inline" : ""
        }`}
      >
        {prefix}
        <span className="item-description__label--zeroes">{leadingZeros}</span>
        <span className="item-description__label--code">{number}</span>
      </div>
    );
  }
};
