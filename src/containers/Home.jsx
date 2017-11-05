import React, { Component } from "react";
import _ from "lodash";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home</h1>
          <p>Available on the Home Component 'this.props':</p>
          <div>{(_.keys(this.props).join(", "))}</div>
        </div>
      </div>
    );
  }
}