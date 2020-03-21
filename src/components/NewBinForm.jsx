import React from "react";
import { PropertyEditorForm } from "./PropertyEditorForm";

const NewBinForm = () => (
  <PropertyEditorForm method="POST" action="/api/bins">
    <label htmlFor="bin_id">
      Bin Label
      <input type="text" id="bin_id" name="bin_id" required />
    </label>
    <input type="submit" value="Submit" /> test
  </PropertyEditorForm>
);

export default NewBinForm;
