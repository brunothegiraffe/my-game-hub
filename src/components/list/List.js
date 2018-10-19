import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Nav from "../nav/Nav";
import "./list.css";
// import Game from "../game/Game";

class List extends Component {
  searchGames(search) {
    console.log(`Searching: ${search}`);
    axios
      .get(`/api/gbgames?search=${search}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          games: response.data
        });
      })
      .catch(err => {
        return console.log(`Not getting data, ${err}`);
      });
  }

  render() {
    // let games = this.state.games.map((game, index) => {
    //   return <Game {...game} key={index} />;
    // });
    return (
      <div className="list_container">
        <Nav />
        <div className="list_content_container">
          <h1>lists will go here</h1>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {}

const actionCreators = {};

export default connect(
  mapStateToProps,
  actionCreators
)(List);
