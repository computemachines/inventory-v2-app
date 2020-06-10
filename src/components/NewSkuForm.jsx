/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "@reach/router";

import "../styles/forms.scss";

const NewSkuForm = () => {
  const [skuId, setSkuId] = useState("");
  const [ownedCodes, setOwnedCodes] = useState("");
  const [assocCodes, setAssocCodes] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  // const [skuProps, setSkuProps] = useState({});
  const [alert, setAlert] = useState(null);
  return (
    <div>
      <form
        className="form"
        method="POST"
        action="/api/skus"
        onSubmit={(e) => {
          fetch("/api/skus", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: skuId,
              ownedCodes: ownedCodes.split(/\W/),
              assocCodes: assocCodes.split(/\W/),
              name,
              "average unit original cost": cost,
            }),
          })
            .then((response) => {
              if (response.ok) {
                response.json().then((data) => {
                  setSkuId("");
                  setOwnedCodes("");
                  setAssocCodes("");
                  setName("");
                  setCost("");

                  setAlert(
                    <div className="alert alert-success">
                      Success: <Link to={`/sku/${data.id}`}>{data.id}</Link>{" "}
                      added.
                    </div>
                  );
                });
              } else {
                setAlert(
                  <div className="alert alert-error">
                    Error: {response.statusText}
                  </div>
                );
              }
            })
            .catch(console.err);
          e.preventDefault();
        }}
      >
        <label className="form-label" htmlFor="cost">
          SKU Id
          <input
            className="form-input"
            type="text"
            id="cost"
            name="cost"
            value={skuId}
            onChange={(e) => setSkuId(e.target.value)}
            required
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
        <label className="form-label" htmlFor="name">
          Name
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="form-label" htmlFor="cost">
          Default average cost per unit
          <input
            className="form-input"
            type="text"
            id="cost"
            name="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </label>
        <input className="form-submit" type="submit" value="Submit" />
      </form>
      {alert}
    </div>
  );
};

export default NewSkuForm;
