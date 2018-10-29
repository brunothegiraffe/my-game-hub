import React, { Component } from "react";
import { Link } from "react-router-dom";
import bigGear from "./images/gear_big.svg";
import medGear from "./images/gear_medium.svg";
import smallGear from "./images/gear_small.svg";
import { updateUser } from "../../dux/reducer";
import { connect } from "react-redux";
import axios from "axios";
import "./login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleInputs = this.handleInputs.bind(this);
  }
  login() {
    console.log("login function");
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("/auth/login", user)
      .then(response => {
        const user = response.data;
        if (user.id) {
          this.props.updateUser(response.data);
          this.props.history.push("/dashboard");
        } else {
          alert("Please enter valid login credentials");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

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
              <button className="register_btn">Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { updateUser }
)(Login);
