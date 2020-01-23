import React from "react";
import PropTypes from "prop-types";

class Bin extends React.Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this.bin_id = 10;
    this.editable = props.editable;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `/api/bin/${this.bin_id}`, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.readyState === 200) {
        this.data = JSON.parse(xhr.responseText);
      }
      if (xhr.status !== 200) {
        console.log(xhr);
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="item-degscription__label">
          BIN
          <span className="item-description__label--code">{this.bin_id}</span>
        </div>
        {this.editable ? <div>Editable</div> : null}
      </React.Fragment>
    );
  }
}

Bin.propTypes = {
  // props: PropTypes.shape().isRequired,
  // match: PropTypes.shape().isRequired,
  editable: PropTypes.shape()
};

Bin.defaultProps = {
  editable: false
};

export default Bin;
