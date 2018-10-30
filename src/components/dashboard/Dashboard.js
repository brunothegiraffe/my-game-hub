import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import Nav from "../nav/Nav";
import axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: ""
    };
    this.handleInputs = this.handleInputs.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }
  componentDidMount() {
    axios.get("/api/getuserinfo").then(response => {
      this.props.updateUser(response.data);
    });
  }

  updateInfo() {
    let user = {
      id: this.props.user.id,
      username: this.state.username
        ? this.state.username
        : this.props.user.username,
      email: this.state.email ? this.state.email : this.props.user.email
    };
    console.log(user);
    axios
      .put(`/api/updateinfo`, { user })
      .then(response => {
        console.log(response.data);
        this.props.updateUser(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    console.log(this.props.user);
    let { username, avatar } = this.props.user;
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
              <input
                onChange={this.handleInputs}
                value={this.state.username}
                name="username"
                type="text"
              />
              <b>Update Email</b>
              <input
                onChange={this.handleInputs}
                value={this.state.email}
                name="email"
                type="text"
              />
            </div>
            <div className="submit_cancel_btns">
              <button onClick={this.updateInfo}>Submit Changes</button>
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
export default connect(
  mapStateToProps,
  { updateUser }
)(Dashboard);
