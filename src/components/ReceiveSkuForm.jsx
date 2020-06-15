import React, { useState } from "react";
import { Link } from "@reach/router";

const ReceiveSkuForm = () => {
  const [binId, setBinId] = useState("");
  const [skuId, setSkuId] = useState("");
  const [batchId, setBatchId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [alert, setAlert] = useState(null);

  return (
    <div>
      <form
        action="/api/receive"
        onSubmit={(event) => {
          fetch("/api/receive", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              bin_id: binId || "RECEIVE",
              sku_id: skuId,
              batch_id: batchId,
              quantity: quantity,
            }),
          })
            .then((response) => {
              if (response.ok) {
                response.json().then((data) => {
                  setSkuId("");
                  setBinId("");
                  setBatchId("");
                  setQuantity("");
                  console.log(data);
                  setAlert(
                    <div className="alert alert-success">
                      Success: Received{" "}
                      <Link to={`/sku/${data.sku_id}`}>{data.sku_id}</Link> into{" "}
                      <Link to={`/bin/${data.bin_id}`}>{data.bin_id}</Link>.
                    </div>
                  );
                });
              } else {
                response.text().then((data) =>
                  setAlert(
                    <div className="alert alert-error">
                      {response.statusText}, Error: {data}
                    </div>
                  )
                );
              }
            })
            .catch(console.err);
          event.preventDefault();
        }}
      >
        <label htmlFor="binId" className="form-label">
          Bin
          <input
            type="text"
            className="form-input"
            name="bin_id"
            value={binId}
            placeholder="RECEIVE"
            onChange={(e) => setBinId(e.target.value)}
          ></input>
        </label>
        <label htmlFor="skuId" className="form-label">
          SKU
          <input
            type="text"
            className="form-input"
            name="sku_id"
            value={skuId}
            onChange={(e) => setSkuId(e.target.value)}
          ></input>
        </label>
        <label htmlFor="batchId" className="form-label">
          Batch
          <input
            type="text"
            className="form-input"
            name="batch_id"
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)}
          />
        </label>
        <label htmlFor="quantity" className="form-label">
          Quantity
          <input
            type="number"
            className="form-input"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="form-submit" />
      </form>
      {alert}
    </div>
  );
};

export default ReceiveSkuForm;
