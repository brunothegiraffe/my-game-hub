import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import bigGear from "./images/gear_big.svg";
import medGear from "./images/gear_medium.svg";
import smallGear from "./images/gear_small.svg";
import "./login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.handleInputs = this.handleInputs.bind(this);
  }
  login() {}

  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state);
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
            <input
              onChange={this.handleInputs}
              className="email"
              name="email"
              placeholder="Email"
              type="text"
            />
            <input
              onChange={this.handleInputs}
              className="username"
              name="username"
              placeholder="Username"
              type="text"
            />
            <input
              onChange={this.handleInputs}
              className="password"
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="buttons">
            <button className="login_btn" onClick={this.login.bind(this)}>
              Login
            </button>
            <Link to="/register">
              <button className="register_btn" onClick={this.login.bind(this)}>
                Register
              </button>
            </Link>
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
