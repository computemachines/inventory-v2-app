import React from "react";

import "../styles/forms.scss";

const NewSkuForm = () => (
  <form className="form" method="POST" action="/api/skus">
    <label className="form-label" htmlFor="sku_id">
      SKU Id
      <input
        className="form-input"
        type="text"
        id="sku_id"
        name="sku_id"
        required
      />
    </label>
    <input className="form-submit" type="submit" value="Submit" />
  </form>
);

export default NewSkuForm;
