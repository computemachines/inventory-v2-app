import React from "react";
// import { connect } from "react-redux";

import ErrorBoundary from "./ErrorBoundary";
// import { setBinData } from "../actions";
import "../styles/Bin.scss";

class Bin extends React.Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.state = {
      bin_data: {},
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `/api/bin/${this.props.match.params.id}`, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.props.dispatchBinData(JSON.parse(xhr.responseText));
      }
      if (xhr.status !== 200) {
        console.log(xhr);
      }
    };
    xhr.send();
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="item-description__label">
          BIN
          <span className="item-description__label--code">{this.bin_id}</span>
        </div>
        {this.editable ? <div>Editable</div> : null}
        <ul className="bin-contents">
          {this.props.binData !== undefined ||
            this.props.binData.contents.map((contents) => (
              <BinContentListItem key={contents.label} {...contents} />
            ))}
        </ul>
        <div>{"" + this.state.bin_id}</div>
      </ErrorBoundary>
    );
  }
}

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

// const BinContent

// const BinContents = (props) => <div className="bin-contents">
//   <div className="bin-contents__list"></div>
// </div>

// Bin.propTypes = {
//   match: PropTypes.shape().isRequired,
//   editable: PropTypes.bool,
//   binData: PropTypes.shape({
//     contents: PropTypes.arrayOf(
//       PropTypes.shape({
//         unit_type: PropTypes.string,
//         label: PropTypes.string,
//         quantity: PropTypes.integer,
//       })
//     ),
//   }),
//   dispatchBinData: PropTypes.func,
// };

// Bin.defaultProps = {
//   editable: false,
// };

// const mapStateToProps = (state) => ({ binData: state.binData });
// const mapDispatchToProps = (dispatch) => ({
//   dispatchBinData(bin_data) {
//     dispatch(setBinData(bin_data));
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Bin);

export default Bin;
