import React from "react";

class Bin extends React.Component {
  constructor(props) {
    super(props);

    this.setState();
  }

  componentDidMount() {}

  render() {
    console.log(this.props);
    return (
      <p>
Hello
        {this.props.match.params.id}
      </p>
);
  }
}

export default Bin;
