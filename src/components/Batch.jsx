import React from "react";

const Batch = ({ props }) => (
  <pre>
    <code>{JSON.stringify(props)}</code>
  </pre>
);

export default Batch;
