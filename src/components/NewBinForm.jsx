import React, { useState } from "react";
// import { PropertyEditorForm } from "./PropertyEditorForm";

import "../styles/forms.scss";

const NewBinForm = () => {
  const [binId, setBinId] = useState("");
  return (
    <form
      className="form"
      method="POST"
      action="/api/bins"
      onSubmit={(e) => {
        e.fetch("/api/bins", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: binId,
          })
            .then((response) => console.log(response))
            .catch(console.err),
        });
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
  );
};

export default NewBinForm;
