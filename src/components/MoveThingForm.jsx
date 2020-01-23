import React from "react";

const MoveThingForm = () => (
  <form action="/api/thing" method="POST" className="inv-form">
    <h3 style={{ textAlign: "center", border: "3px solid red" }}>
      API Not Implemented Yet
    </h3>
    <h2 className="inv-form__title">Move Thing</h2>
    <div className="inv-form__item">
      <input id="thing-label" type="text" name="thing_label" />
      <label htmlFor="thing-label">UNIQ</label>
    </div>
    <div className="inv-form__item">
      <input id="bin-label" type="text" name="bin_label" />
      <label htmlFor="bin-label">BIN</label>
    </div>
    <input className="inv-form__submit" type="submit" value="Submit" />
  </form>
);

export default MoveThingForm;
