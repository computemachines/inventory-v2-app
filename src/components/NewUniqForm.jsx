import React from "react";

const NewUniqForm = () => (
  <form className="form" method="POST" action="/api/uniqs">
    <div className="form-item form--uniq_id">
      <label htmlFor="uniq_id">
        <input type="text" id="uniq_id" name="uniq_id" required />
        UNIQ Id
      </label>
    </div>
    <div className="form-item">
      <label htmlFor="owned_codes">
        <textarea id="owned_codes" name="owned_codes" />
        Owned Codes
      </label>
    </div>
    <div className="form-item form--bin_id">
      <label htmlFor="bin_id">
        <input type="text" id="bin_id" name="bin_id" required />
        Bin Locationf
      </label>
    </div>
    <div className="form-item form--uniq_name">
      <label htmlFor="uniq_name">
        <input type="text" id="uniq_name" name="uniq_name" />
        Uniq Name
      </label>
    </div>
    <div className="form-item form--sku_id">
      <label htmlFor="sku_id">
        <input type="text" id="sku_id" name="sku_id" />
        Parent Sku
      </label>
    </div>
    <input type="submit" value="Submit" />
  </form>
);

export default NewUniqForm;
