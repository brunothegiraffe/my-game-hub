import React, { Component } from "react";
import bigGear from "./images/gear_big.svg";
import medGear from "./images/gear_medium.svg";
import smallGear from "./images/gear_small.svg";
import "./login.css";

class Login extends Component {
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`;

    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri${uri}&response_type=code`;
  }

  render() {
    return (
      <div className="App">
        <header className="header">
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
          </div>
        </header>
        <div className="main_container">
          <div className="login_card">
            <div className="login_btn" onClick={this.login.bind(this)}>
              Login
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
