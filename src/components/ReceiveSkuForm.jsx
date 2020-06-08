import React, { useState } from "react";

const ReceiveSkuForm = () => {
  const [binId, setBinId] = useState("");
  const [skuId, setSkuId] = useState("");
  const [batchId, setBatchId] = useState("");
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <form action="/api/recieve">
        <label htmlFor="binId" className="form-label">
          Bin
          <input
            type="text"
            className="form-input"
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
            value={skuId}
            onChange={(e) => setSkuId(e.target.value)}
          ></input>
        </label>
        <label htmlFor="batchId" className="form-label">
          Batch
          <input
            type="text"
            className="form-input"
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)}
          />
        </label>
        <label htmlFor="quantity" className="form-label">
          Quantity
          <input
            type="number"
            className="form-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="form-submit" />
      </form>
    </div>
  );
};

export default ReceiveSkuForm;
