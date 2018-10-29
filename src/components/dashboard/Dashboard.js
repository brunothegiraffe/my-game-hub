import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../nav/Nav";
import axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      username: this.props.user.username,
      email: this.props.user.email
    };
  }
  updateUserInfo(id) {
    const { username, email } = this.state;
    if (username && email) {
      axios.put();
    }
  }
  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    let { username, avatar } = this.props.user;
    console.log(this.props.user);
    return (
      <div className="dashboard_container">
        <Nav />
        <div className="dashboard_content_container">
          <div className="personal_info">
            <h1>
              {username}
              's Account Information
            </h1>
            <img className="avatar" src={avatar} alt="user avatar" />
            <div className="header_and_inputs">
              <b>Update Username</b>
              <input onChange={this.handleInputs} name="username" type="text" />
              <b>Update Email</b>
              <input onChange={this.handleInputs} name="email" type="text" />
            </div>
            <div className="submit_cancel_btns">
              <button>Submit Changes</button>
              <button>Cancel Changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Dashboard);
