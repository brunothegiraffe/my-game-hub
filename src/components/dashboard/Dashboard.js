import React, { Component } from "react";
import Nav from "../nav/Nav";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard_container">
        <Nav />
        <div className="dashboard_content_container">
          <h1>Content will go here</h1>
        </div>
      </div>
    );
  }
}
export default Dashboard;
