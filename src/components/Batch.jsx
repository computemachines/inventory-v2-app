import React from "react";
import PropTypes from "prop-types";

const Batch = ({ props }) => (
  <pre>
    <code>{JSON.stringify(props)}</code>
  </pre>
);

Batch.propTypes = {
  props: PropTypes.shape().isRequired,
};

export default Batch;
