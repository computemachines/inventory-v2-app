import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("The link was clicked.");
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

export default Message;
