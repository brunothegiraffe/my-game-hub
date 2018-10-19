import React, { Component } from "react";
import { connect } from "react-redux";
import bigGear from "./images/gear_big.svg";
import medGear from "./images/gear_medium.svg";
import smallGear from "./images/gear_small.svg";
import "./login.css";

class Login extends Component {
  login() {}
  register() {}

  handleInputs() {}

  render() {
    return (
      <div className="container">
        <div className="login_card">
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
          <div className="input_boxes">
            <input className="email" placeholder="Email" type="text" />
            <input className="username" placeholder="Username" type="text" />
            <input
              className="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="buttons">
            <button className="login_btn" onClick={this.login.bind(this)}>
              Login
            </button>
            <button className="register_btn" onClick={this.login.bind(this)}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: state.user
//   };
// }

export default connect()(Login);
