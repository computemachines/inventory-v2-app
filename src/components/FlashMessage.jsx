import React from "react";
import { parse } from "query-string";

import $ from "jquery";

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);

    this._ref = React.createRef();
  }
  componentDidMount() {
    const node = this._ref.current;
    $(node)
      .show()
      .delay(3000)
      .animate({
        bottom: "-5rem",
        opacity: "hide"
      });
  }
  render() {
    const queryString = parse(this.props.location.search);

    if (queryString["last_inserted"]) {
      return (
        <div ref={this._ref} className="flash">
          Successfully added {queryString["last_inserted"]}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default FlashMessage;
