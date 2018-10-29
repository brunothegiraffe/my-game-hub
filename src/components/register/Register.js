import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import bigGear from "./images/gear_big.svg";
import medGear from "./images/gear_medium.svg";
import smallGear from "./images/gear_small.svg";
import "./register.css";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.handleInputs = this.handleInputs.bind(this);
    this.register = this.register.bind(this);
  }
  register(e) {
    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      avatar: `https://robohash.org/${this.state.username}.png`
    };
    if (
      this.state.password !== "" &&
      this.state.password === this.state.confirmPassword
    ) {
      axios
        .post("/auth/register", user)
        .then(result => {
          console.log(result);
          this.props.history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    } else if (this.state.email === "") {
      alert(`Please enter an email address`);
    } else if (this.state.username === "") {
      alert(`Please enter a username`);
    } else {
      alert(`Passwords don't match`);
    }
  }

  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="register_card">
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
          <div className="register_input_boxes">
            <input
              onChange={this.handleInputs}
              value={this.state.email}
              name="email"
              className="email"
              placeholder="Email"
              type="text"
            />
            <input
              onChange={this.handleInputs}
              value={this.state.username}
              name="username"
              className="username"
              placeholder="Username"
              type="text"
            />
            <input
              onChange={this.handleInputs}
              value={this.state.password}
              name="password"
              className="password"
              placeholder="Password"
              type="password"
            />
            <input
              onChange={this.handleInputs}
              value={this.state.confirmPassword}
              name="confirmPassword"
              className="pwd_confirm"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
          <button className="submit_btn" onClick={this.register}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Register);
