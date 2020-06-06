import React from "react";
// import { PropertyEditorForm } from "./PropertyEditorForm";

import "../styles/forms.scss";

const NewBinForm = () => (
  <form className="form" method="POST" action="/api/bins">
    <label className="form-label" htmlFor="bin_id">
      Bin Label
      <input
        className="form-input"
        type="text"
        id="bin_id"
        name="bin_id"
        required
      />
    </label>
    <input className="form-submit" type="submit" value="Submit" />
  </form>
);

export default NewBinForm;
