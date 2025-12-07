import React, { Component } from "react";

export default class PublicationsImg extends Component {
  render() {
    return (
      <div className="publications-heading-img-div">
        <img
          className="publications-heading-img"
          src={require("../../assets/images/research.png")}
          alt="research"
        />
      </div>
    );
  }
}
