import React from "react";

import PropTypes from "prop-types";

import Bin from "./Bin";
import Sku from "./Sku";
import Batch from "./Batch";
import Uniq from "./Uniq";

const Unit = ({ json }) => {
  if (json.id.startsWith("BIN")) {
    return <Bin json={json} />;
  }
  if (json.id.startsWith("SKU")) {
    return <Sku json={json} />;
  }
  if (json.id.startsWith("BAT")) {
    return <Batch json={json} />;
  }
  if (json.id.startsWith("UNIQ")) {
    return <Uniq json={json} />;
  }
  return <p>BAD</p>;
};

Unit.propTypes = {
  json: PropTypes.shape().isRequired,
};

export default Unit;
