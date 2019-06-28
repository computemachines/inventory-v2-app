import React from "react";

const NewSkuForm = () => (
  <form method="POST" action="/api/skus">
    <label htmlFor="sku_id">
      <input type="text" id="sku_id" name="sku_id" required />
      SKU Id
    </label>
    <input type="submit" value="Submit" />
  </form>
);

export default NewSkuForm;
