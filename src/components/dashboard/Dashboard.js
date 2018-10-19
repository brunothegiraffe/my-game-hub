import React, { Component } from "react";
import Nav from "../nav/Nav";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="main_container">
        <div className="nav_container">
          <Nav />
        </div>
      </div>
    );
  }
}
export default Dashboard;
