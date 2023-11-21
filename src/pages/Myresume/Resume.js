import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <iframe
        src="../../assests/resume.pdf"
        className="resume"
        title="myresume"
        style={{ margin: "0 auto", display: "block" }}
        height="900"></iframe>
    );
  }
}
