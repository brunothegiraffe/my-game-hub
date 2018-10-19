import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../nav/Nav";
import axios from "axios";
import "./findgames.css";
// import Game from "../game/Game";

class FindGames extends Component {
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
      <div className="findgames_container">
        <Nav />
        <div className="findgames_content_container">
          <h1>Search results here</h1>
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
)(FindGames);
