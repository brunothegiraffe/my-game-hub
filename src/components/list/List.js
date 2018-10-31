import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser, addGame } from "../../dux/reducer";
import Game from "../game/Game";
import axios from "axios";
import Nav from "../nav/Nav";
import "./list.css";
// import Game from "../game/Game";

class List extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    };
  }
  componentDidMount() {
    axios.get("/api/getuserinfo").then(response => {
      this.props.updateUser(response.data);
    });
    axios.get("/api/getownedgames").then(response => {
      this.setState({
        games: response.data
      });
    });
  }

  render() {
    let ownedGames = this.state.games.map((game, index) => {
      return <Game {...game} key={index} />;
    });
    return (
      <div className="list_container">
        <Nav />
        <div className="list_content_container">
          <div className="list_search_container">
            <input
              onChange={this.handleSearch}
              name="searchString"
              value={this.state.searchString}
              placeholder="Find Games"
            />
            <button
              onClick={() => this.searchGames(this.state.searchString)}
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="list_displayed_games">
            <div className="displayed_games">{ownedGames}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

export default connect(
  mapStateToProps,
  { updateUser, addGame }
)(List);
