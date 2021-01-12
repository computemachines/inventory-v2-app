import React, { useState } from "react";
import { connect } from "react-redux";

const NewBatchForm = (nextBatchId) => {
  // const [alert, setAlert] = useState(null);
  const [batchId, setBatchId] = useState(nextBatchId);
  return (
    <div>
      <form
        onSubmit={() =>
          fetch({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
          })
        }
      >
        <label htmlFor="batch_id" className="form-label">
          Batch Label
          <input
            type="text"
            className="form-input"
            id="batch_id"
            required
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = (storeState) => ({
  nextBatchId: storeState.nextBatch,
});

export default connect(mapStateToProps)(NewBatchForm);
