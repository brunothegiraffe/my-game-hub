import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="main_nav">
      <div className="user_info">
        <img src="" alt="" />
      </div>
      <div className="ul_container">
        <ul className="main_menu">
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/lists">
            <li>View My Games</li>
          </Link>
          <Link to="/findgames">
            <li>Find a Game</li>
          </Link>
          <Link to="/">
            <li>Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
