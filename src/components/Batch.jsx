import React, { useState, useEffect } from "react";
import { Label } from "./Label";

const Batch = ({ batchId }) => {
  const [batchData, setBatchData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(
    () =>
      fetch(`/api/batch/${batchId}`)
        .then((resp) => resp.json())
        .then((data) => setBatchData(data.state))
        .then(() => setLoading(false)),
    [batchId]
  );
  if (loading) return <div>Loading ...</div>;

  return (
    <pre>
      <Label link={false} label={batchId} />
      <code>{JSON.stringify(batchData, null, 4)}</code>
    </pre>
  );
};

export default Batch;
