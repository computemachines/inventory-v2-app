import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { setBinData } from "../actions";
import "../styles/Bin.scss";
import "../styles/item.scss";
import { Label } from "./Label";

// eslint-disable-next-line no-unused-vars
const Bin = ({ binData, setBinData, binId, editable }) => {
  const [loaded, setLoaded] = useState(false);

  console.log("bin_id", binId);
  useEffect(() => {
    if (binData === null) {
      fetch(`/api/bin/${binId}`).then((response) =>
        response
          .json()
          .then((data) => {
            setBinData(data.state);
          })
          .finally(() => setLoaded(true))
      );
    }
  }, [binData, binId, setBinData]);

  return (
    <React.Fragment>
      <Label link={false} label={binId} />
      {editable && <div>Editable</div>}
      {!loaded ? (
        <div>Loading ...</div>
      ) : (
        <BinContentsTable binData={binData} />
      )}
    </React.Fragment>
  );
};

const BinContentsTable = ({ binData }) => (
  <ul className="bin-contents">
    {binData &&
      binData.contents &&
      Object.entries(binData.contents).map((content) => (
        <BinContentListItem
          key={content}
          label={content[0]}
          quantity={content[1]}
        />
      ))}
  </ul>
);

// eslint-disable-next-line no-unused-vars
function BinContentListItem({ unit_type, label, quantity }) {
  let labelClassName = "bin-contents bin-contents__label";
  switch (unit_type) {
    case "BATCH":
      labelClassName += "--batch";
      break;
    case "SKU":
      labelClassName += "--sku";
      break;
    default:
      break;
  }
  return (
    <li className="bin-contents">
      <div className={labelClassName}>{label}</div>
      <div className="bin-contents bin-contents__quantity">{quantity}</div>
    </li>
  );
}

// const BinContents = (props) => <div className="bin-contents">
//   <div className="bin-contents__list"></div>
// </div>

const mapStateToProps = (state) => ({ binData: state.binData });
const mapDispatchToProps = (dispatch) => ({
  setBinData(bin_data) {
    dispatch(setBinData(bin_data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Bin);
