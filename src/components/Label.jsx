import React from "react";
import { Link } from "@reach/router";

export const Label = ({ link = true, label, inline }) => {
  const [, prefix, leadingZeros, nonZeroPart] = label.match(
    /^(BIN|SKU|BAT|BATCH|UNIQ)(0+)(\d+)$/
  );

  var unitUrl;
  switch (prefix) {
    case "BIN":
      unitUrl = "/bin/";
      break;
    case "SKU":
      unitUrl = "/sku/";
      break;
    case "BAT":
    case "BATCH":
      unitUrl = "/batch/";
      break;
    case "UNIQ":
      unitUrl = "/uniq/";
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
        <span className="item-description__label--code">{nonZeroPart}</span>
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
        <span className="item-description__label--code">{nonZeroPart}</span>
      </div>
    );
  }
};
