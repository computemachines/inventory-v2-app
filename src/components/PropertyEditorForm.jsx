import React from "react";

import "../styles/PropertyEditorForm.less";

export class PropertyEditorForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form method={this.props.method} action={this.props.action}>
        <h2>test</h2>
        {this.props.children}

        <ExpandingList>
          <KeyValueInput />
        </ExpandingList>
      </form>
    );
  }
}

const ExpandingList = props => (
  <div className="expanding-list">
    <div className="expanding-list__item">{props.children}</div>
    <button
      alt="remove this line"
      className="expanding-list__button expanding-list__button--remove"
    ></button>
    <button
      alt="add one more line"
      className="expanding-list__button expanding-list__button--add"
    ></button>
  </div>
);
const KeyValueInput = () => (
  <div className="key-value-input">
    <input type="text" />
    <input type="text" />
  </div>
);
