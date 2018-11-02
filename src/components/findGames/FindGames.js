import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import Nav from "../nav/Nav";
import MobileNav from "../mobileNav/MobileNav";
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
    this.addToOwned = this.addToOwned.bind(this);
  }
  componentDidMount() {
    axios.get("/api/getuserinfo").then(response => {
      this.props.updateUser(response.data);
    });
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
  addToOwned(game) {
    console.log(game);
    let ownedGame = {
      name: game.name,
      image: game.image
    };
    axios.post("/api/addtoowned", { ownedGame }).catch(err => {
      console.log(err);
    });
  }

  render() {
    let games = this.state.games.map((game, id) => {
      return <Game {...game} key={id} addToOwned={this.addToOwned} />;
    });
    return (
      <div className="findgames_container">
        <Nav />
        <MobileNav />
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

export default connect(
  null,
  { updateUser }
)(FindGames);
