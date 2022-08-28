import React, { Component } from "react";
import "./style.css";

class Scroll extends Component {
  render() {
    return (
      <div id="scrollBar" className="scroll is-active">
        <div className="fill">
          <div className="inner"></div>
        </div>
        <div className="text">
          <p className="tag">SCROLL</p>
        </div>
      </div>
    );
  }
}

export default Scroll;
