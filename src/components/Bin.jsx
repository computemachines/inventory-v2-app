import React from "react";
import PropTypes from "prop-types";

const Bin = ({ match, props }) => {
  return (
    <pre>
      <code>{JSON.stringify(props)}</code>
    </pre>
  );
};

Bin.propTypes = {
  props: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired
};

export default Bin;
