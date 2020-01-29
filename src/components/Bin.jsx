import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import setBinData from "actions";

class Bin extends React.Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.state = {
      bin_data: {}
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
      <React.Fragment>
        <div className="item-degscription__label">
          BIN
          <span className="item-description__label--code">{this.bin_id}</span>
        </div>
        {this.editable ? <div>Editable</div> : null}
        <div>{"" + this.state.bin_id}</div>
      </React.Fragment>
    );
  }
}

Bin.propTypes = {
  match: PropTypes.shape().isRequired,
  editable: PropTypes.bool,
  binData: PropTypes.shape(),
  dispatchBinData: PropTypes.func()
};

Bin.defaultProps = {
  editable: false
};

const mapStateToProps = state => ({ binData: state.binData });
const mapDispatchToProps = dispatch => ({
  dispatchBinData(bin_data) {
    dispatch(setBinData(bin_data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Bin);
