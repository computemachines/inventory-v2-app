import React, { useState } from "react";
// import { PropertyEditorForm } from "./PropertyEditorForm";

import "../styles/forms.scss";
import { Link } from "@reach/router";

const NewBinForm = () => {
  const [alert, setAlert] = useState(null);
  const [binId, setBinId] = useState("");
  return (
    <div>
      <form
        className="form"
        method="POST"
        action="/api/bins"
        onSubmit={(e) => {
          fetch("/api/bins", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: binId,
            }),
          })
            .then((response) => {
              if (response.ok) {
                response.json().then((data) => {
                  setBinId("");
                  setAlert(
                    <div className="alert alert-success">
                      Success:{" "}
                      <Link to={`/bin/${data.id}`}>
                        {JSON.stringify(data, null, 4)}
                      </Link>{" "}
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
        <label className="form-label" htmlFor="bin_id">
          Bin Label
          <input
            className="form-input"
            type="text"
            id="bin_id"
            name="bin_id"
            value={binId}
            onChange={(e) => setBinId(e.target.value)}
            required
          />
        </label>
        <input className="form-submit" type="submit" value="Submit" />
      </form>
      {alert}
    </div>
  );
};

export default NewBinForm;
