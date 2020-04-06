import React, { Component } from "react";

import Parser from "html-react-parser";

class RenderingRawHtml extends Component {
  constructor(props) {
    super(props);

    this.state = { htmlData: "<div><h2><u>HTML Data</u></h2></div>" };
  }

  render() {
    return (
      <>
        <h3>Rendering raw html data in reactjs Example</h3>

        <div>{Parser(this.state.htmlData)}</div>
      </>
    );
  }
}

export default RenderingRawHtml;
