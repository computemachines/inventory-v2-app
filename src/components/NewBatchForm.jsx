import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// /* eslint-disable */
// import actions from "../actions";
import { printLabel } from "../local_utils";
import { Label } from "./Label";

const NewBatchForm = ({ nextBatchId, setNextBatchId }) => {
  // const [alert, setAlert] = useState(null);
  const [batchId, setBatchId] = useState(nextBatchId);
  const [name, setName] = useState("");
  const [skuId, setSkuId] = useState("");
  const [ownedCodes, setOwnedCodes] = useState("");
  const [assocCodes, setAssocCodes] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetch("/api/next/batch")
      .then((resp) => resp.json())
      .then((data) => setNextBatchId(data.state));
  }, [setNextBatchId]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          fetch("/api/batches", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: batchId || nextBatchId,
              name,
              sku_id: skuId,
              owned_codes: ownedCodes,
              associated_codes: assocCodes,
            }),
          })
            .then((resp) => {
              if (resp.ok) {
                setAlert(
                  <div className="alert alert-success">
                    Success:{" "}
                    <Label label={batchId || nextBatchId} inline></Label> added.
                  </div>
                );
              }
            })
            .then(() => {
              console.log("fetching next batch id");
              fetch("/api/next/batch")
                .then((resp) => resp.json())
                .then((data) => setNextBatchId(data.state));
            });
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
              value={batchId}
              placeholder={nextBatchId}
              onChange={(e) => setBatchId(e.target.value)}
            />
            <button
              type="button"
              className="form-input-print-button"
              onClick={() => printLabel(batchId || nextBatchId)}
            >
              Print
            </button>
          </div>
        </label>
        <label htmlFor="sku_id" className="form-label">
          SKU Label
          <input
            type="text"
            name="sku_id"
            id="sku_id"
            className="form-input"
            value={skuId}
            onChange={(e) => setSkuId(e.target.value)}
          />
        </label>
        <label htmlFor="name" className="form-label">
          Name
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="owned_codes" className="form-label">
          Owned Codes
          <textarea
            name="owned_codes"
            id="owned_codes"
            // cols="30"
            // rows="10"
            className="form-input"
            value={ownedCodes}
            onChange={(e) => setOwnedCodes(e.target.value)}
          />
        </label>
        <label htmlFor="assoc_codes" className="form-label">
          Associated Codes
          <textarea
            name="assoc_codes"
            id="assoc_codes"
            // cols="30"
            // rows="10"
            className="form-input"
            value={assocCodes}
            onChange={(e) => setAssocCodes(e.target.value)}
          ></textarea>
        </label>
        <input type="submit" value="Submit" className="form-submit" />
      </form>
      {alert}
    </div>
  );
};

const mapStateToProps = (storeState) => ({
  nextBatchId: storeState.nextBatch,
});

const mapDispatchToProps = (dispatch) => ({
  setNextBatchId(id) {
    dispatch({
      type: "SET_NEXT_BATCH",
      payload: id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBatchForm);
