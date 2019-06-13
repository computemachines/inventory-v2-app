import React from "react";

const NewUniqForm = () => (
  <form className="form" method="POST" action="/api/uniqs">
    <div className="form-item form--uniq_id">
      <label htmlFor="uniq_id">UNIQ Id</label>
      <input type="text" id="uniq_id" name="uniq_id" required />
    </div>
    <div className="form-item">
      <label htmlFor="owned_codes">Owned Codes</label>
      <textarea id="owned_codes" name="owned_codes"></textarea>
    </div>
    <div className="form-item form--bin_id">
      <label htmlFor="bin_id">Bin Location</label>
      <input type="text" id="bin_id" name="bin_id" required />
    </div>
    <div className="form-item form--uniq_name">
      <label htmlFor="uniq_name">Uniq Name</label>
      <input type="text" id="uniq_name" name="uniq_name" />
    </div>
    <div className="form-item form--sku_id">
      <label htmlFor="sku_id">Parent Sku</label>
      <input type="text" id="sku_id" name="sku_id" />
    </div>
    <input type="submit" value="Submit" />
  </form>
);

export default NewUniqForm;
