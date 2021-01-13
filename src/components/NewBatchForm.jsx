import React, { useState } from "react";
import { connect } from "react-redux";

import actions from "../actions";
import { printLabel } from "../local_utils";

const NewBatchForm = (nextBatchId, setNextBatchId) => {
  // const [alert, setAlert] = useState(null);
  const [batchId, setBatchId] = useState(nextBatchId);
  if (0 == batchId) {
    setNextBatchId(0);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          fetch("/api/batches", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
          })
            .then((resp) => resp.json())
            .then(console.log);
          e.preventDefault();
        }}
      >
        <label htmlFor="batch_id" className="form-label">
          Batch Label
          <div className="form-input-container">
            <input
              type="text"
              className="form-input"
              id="batch_id"
              required
              value={batchId}
              onChange={(e) => setBatchId(e.target.value)}
            />
            <button
              type="button"
              className="form-input-print-button"
              onClick={() => printLabel(batchId)}
            >
              Print
            </button>
          </div>
        </label>
        <input type="submit" value="Submit" className="form-submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (storeState) => ({
  nextBatchId: storeState.nextBatch,
});

const mapDispatchToProps = (dispatch) => ({
  setNextBatchId(id) {
    dispatch(actions.setBatchId(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBatchForm);
