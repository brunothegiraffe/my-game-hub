import React from "react";
import { Link } from "react-router-dom";
import bigGear from "./images/gear_big.svg";
import medGear from "./images/gear_medium.svg";
import smallGear from "./images/gear_small.svg";
import "./nav.css";

export default function Nav() {
  return (
    <div className="main_nav">
      <div className="gear_logo">
        <div className="big_gear">
          <img src={bigGear} alt="" />
        </div>
        <div className="med_gear">
          <img src={medGear} alt="" />
        </div>
        <div className="small_gear">
          <img src={smallGear} alt="" />
        </div>
        <div className="logo_text_my">My</div>
        <div className="logo_text_game">Game</div>
        <div className="logo_text_hub">Hub</div>
      </div>

      <ul className="main_menu">
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/lists">
          <li>My Games</li>
        </Link>
        <Link to="/search">
          <li>Find a Game</li>
        </Link>
        <Link to="/undecided">
          <li>Undecided</li>
        </Link>
        <Link to="/">
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
}
