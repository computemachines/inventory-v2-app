import React from "react";

import "../styles/forms.scss";

const NewUniqForm = () => (
  <form className="form" method="POST" action="/api/uniqs">
    <label className="form-label" htmlFor="uniq_id">
      UNIQ Id
      <input
        className="form-input"
        type="text"
        id="uniq_id"
        name="uniq_id"
        required
      />
    </label>
    <label className="form-label" htmlFor="owned_codes">
      Owned Codes
      <textarea className="form-input" id="owned_codes" name="owned_codes" />
    </label>
    <label className="form-label" htmlFor="bin_id">
      Bin Location
      <input
        className="form-input"
        type="text"
        id="bin_id"
        name="bin_id"
        required
      />
    </label>
    <label className="form-label" htmlFor="uniq_name">
      Uniq Name
      <input
        className="form-input"
        type="text"
        id="uniq_name"
        name="uniq_name"
      />
    </label>
    <label className="form-label" htmlFor="sku_id">
      Parent Sku
      <input className="form-input" type="text" id="sku_id" name="sku_id" />
    </label>
    <input className="form-submit" type="submit" value="Submit" />
  </form>
);

export default NewUniqForm;
