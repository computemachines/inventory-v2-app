import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { setBinData } from "../actions";
import "../styles/Bin.scss";

const Bin = ({ binData, setBinData, bin_id, editable }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (binData === null) {
      fetch(`/api/bin/${bin_id}`)
        .then((response) => {
          setBinData(response.json());
        })
        .finally(() => setLoaded(true));
    }
  }, []);

  return (
    <React.Fragment>
      <div className="item-description__label">
        BIN
        <span className="item-description__label--code">{bin_id}</span>
      </div>
      {editable && <div>Editable</div>}
      {!loaded ? (
        <div>Loading ...</div>
      ) : (
        <ul className="bin-contents">
          {binData &&
            binData.contents &&
            binData.contents.map((contents) => (
              <BinContentListItem key={contents.label} {...contents} />
            ))}
        </ul>
      )}
    </React.Fragment>
  );
};

// eslint-disable-next-line no-unused-vars
function BinContentListItem({ unit_type, label, quantity }) {
  let labelClassName = "bin-contents bin-contents__label";
  switch (unit_type) {
    case "UNIQ":
      labelClassName += "--uniq";
      break;
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
