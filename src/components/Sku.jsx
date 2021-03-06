import { Link } from "@reach/router";
import { stringifyUrl } from "query-string";
import React, { useState, useEffect } from "react";
import { Label } from "./Label";

const Sku = ({ skuId }) => {
  const [skuData, setSkuData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/sku/${skuId}`)
      .then((resp) => resp.json())
      .then(setSkuData)
      .then(() => {
        setLoading(false);
      });
  }, [skuId]);

  if (loading) return <div>Loading ...</div>;

  return (
    <div>
      <h2>{skuData.name}</h2>
      <Label link={false} label={skuId} />
      <code>{JSON.stringify(skuData, null, 4)}</code>
      <Link to={stringifyUrl({ url: "/receive", query: { sku: skuId } })}>
        Receive
      </Link>
    </div>
  );
};

export default Sku;
