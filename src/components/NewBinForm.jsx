import React from "react";

const NewBinForm = () => (
  <form method="POST" action="/api/bins">
    <label htmlFor="bin_id">
      <input type="text" id="bin_id" name="bin_id" required />
      Bin Label
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default NewBinForm;
