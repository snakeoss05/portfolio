import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <iframe
        src="https://noussaierportfolio.netlify.app/../../assests/resume.pdf"
        className="resume"
        title="myresume"
        style={{ margin: "0 auto", display: "block" }}
        height="900"></iframe>
    );
  }
}
