import React from "react";
import { connect } from "react-redux";

import "../styles/SearchResults.scss";
import "../styles/card.scss";

const Label = ({ label, inline }) => {
  const [, prefix, leadingZeros, nonZeroPart] = label.match(
    /^(BIN|SKU|BAT|BATCH|UNIQ)(0+)(\d+)$/
  );
  return (
    <div
      className={`item-description__label ${
        inline ? "item-description__label--inline" : ""
      }`}
    >
      {prefix}
      <span className="item-description__label--zeroes">{leadingZeros}</span>
      <span className="item-description__label--code">{nonZeroPart}</span>
    </div>
  );
};

const BinPreview = ({ json, label }) => {
  return (
    <div className="card">
      <Label label={label} />
      <code>{json.contents.length} items</code>
    </div>
  );
};

const SkuPreview = ({ json, label }) => {
  return (
    <div className="card">
      <Label label={label} />
      <code>{JSON.stringify(json, null, 4)}</code>
    </div>
  );
};

const UniqPreview = ({ json, label }) => {
  return (
    <div className="card">
      <div className="item-description__name">{json.name}</div>
      <div className="item-description__line">
        Label: <Label inline label={label} />
      </div>
      <div className="item-description__line">
        Location: <Label inline label={json.bin_id} />
      </div>
      {json.sku_parent ? (
        <div className="item-description__line">
          SKU: <Label inline label={json.bin_id} />
        </div>
      ) : null}
      {/* <code style={{ display: "block" }}>{JSON.stringify(json, null, 4)}</code> */}
    </div>
  );
};

const BatchPreview = ({ json, label }) => {
  return (
    <div className="card">
      <Label label={label} />
      <code>{JSON.stringify(json, null, 4)}</code>
    </div>
  );
};

const SearchResults = ({ results }) => {
  return (
    <React.Fragment>
      {Array.isArray(results) && !results.length ? (
        <h3>Nothing Found</h3>
      ) : null}
      <ul className="search-results">
        {results &&
          results.map(function showUnitPreview(resultJson) {
            const label = resultJson.id;

            if (label.startsWith("BIN")) {
              return <BinPreview key={label} label={label} json={resultJson} />;
            }
            if (label.startsWith("SKU")) {
              return <SkuPreview key={label} label={label} json={resultJson} />;
            }
            if (label.startsWith("BAT")) {
              return (
                <BatchPreview key={label} label={label} json={resultJson} />
              );
            }
            if (label.startsWith("UNIQ")) {
              return (
                <UniqPreview key={label} label={label} json={resultJson} />
              );
            }
            return (
              <div className="card" key={resultJson}>
                <div className="item-description__label">
                  Error: Could not display.
                </div>
                <code>{JSON.stringify(resultJson, null, 4)}</code>
              </div>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

// SearchResults.propTypes = {
//   results: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };
// SearchResults.defaultProps = {
//   results: [],
// };

export default connect((state) => ({ results: state.searchResults }))(
  SearchResults
);
