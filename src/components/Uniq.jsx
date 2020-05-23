import React from "react";
import PropTypes from "prop-types";

const UniqCard = ({ json }) => (
  <div className="inv-card">
    <h3 className="inv-card--title">{json.name}</h3>
    <div className="inv-card--data-fields">
      <div className="inv-card--label">
        Id:
        <span className="inv-card--value">{json.id}</span>
      </div>
      <div className="inv-card--label">
        Bin:
        <span className="inv-card--value">{json.bin_id}</span>
      </div>
      <div className="inv-card--label">
        Name:
        <span className="inv-card--value">{json.id}</span>
      </div>
    </div>
  </div>
);

UniqCard.propTypes = {
  json: PropTypes.shape({
    id: PropTypes.shape().isRequired,
    bin_id: PropTypes.shape().isRequired,
    owned_codes: PropTypes.shape(),
    sku_parent: PropTypes.shape(),
    name: PropTypes.shape().isRequired,
    original_cost: PropTypes.shape(),
    asset_value: PropTypes.shape(),
    assembly: PropTypes.shape(),
    props: PropTypes.shape(),
    inherited_props: PropTypes.shape(),
  }).isRequired,
};

export default UniqCard;
