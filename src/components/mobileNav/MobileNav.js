import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./mobilenav.css";

class MobileNav extends Component {
  logout() {
    axios.get(`/auth/logout`).then(() => {});
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="main_mobile_nav">
        <img className="mobile_avatar" src={this.props.user.avatar} alt="" />
        <div className="hover_menu">
          <ul className="main_hover_menu">
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/lists">
              <li>My Games</li>
            </Link>
            <Link to="/findgames">
              <li>Find Games</li>
            </Link>
            <li onClick={this.logout.bind(this)}>Logout</li>
          </ul>
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
export default connect(mapStateToProps)(withRouter(MobileNav));
