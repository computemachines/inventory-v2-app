import React from "react";

import BinPreview from "./BinPreview";
import SkuPreview from "./SkuPreview";
// import BatchPreview from "./BatchPreview";
import UniqPreview from "./UniqPreview";

const UnitPreview = ({ json }) => {
  if (json.id.startsWith("BIN")) {
    return <BinPreview json={json} />;
  }
  if (json.id.startsWith("SKU")) {
    return <SkuPreview json={json} />;
  }
  //   if (json.id.startsWith("BAT")) {
  //     return <BatchPreview json={json} />;
  //   }
  if (json.id.startsWith("UNIQ")) {
    return <UniqPreview json={json} />;
  }
  return <p>BAD: {JSON.stringify(json, null, 4)}</p>;
};

// Unit.propTypes = {
//   json: PropTypes.shape().isRequired,
// };

export default UnitPreview;
