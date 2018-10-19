import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Game from "../game/Game";

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
    let games = this.state.games.map((game, index) => {
      return <Game {...game} key={index} />;
    });
    return (
      <div className="main_container">
        <input
          placehodler="Find Games"
          onChange={e => this.searchGames(e.target.value)}
        />
        {games}
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
