import React, { Component } from "react";
import Nav from "../nav/Nav";
import axios from "axios";
import "./findgames.css";
import Game from "../game/Game";

class FindGames extends Component {
  constructor() {
    super();

    this.state = {
      searchString: "",
      games: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  searchGames(searchString) {
    console.log(`Searching: ${searchString}`);
    axios
      .get(`/api/gbgames?search=${searchString}`)
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
    console.log(this.state);
    let games = this.state.games.map((game, id) => {
      return <Game {...game} key={id} />;
    });
    return (
      <div className="findgames_container">
        <Nav />
        <div className="findgames_content_container">
          <div className="search_container">
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
          <div className="findgames_displayed_games">
            <div className="displayed_games">{games}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindGames;
