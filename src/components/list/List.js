import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import Game from "../game/Game";
import axios from "axios";
import Nav from "../nav/Nav";
import MobileNav from "../mobileNav/MobileNav";
import "./list.css";
// import Game from "../game/Game";

class List extends Component {
  constructor() {
    super();

    this.state = {
      games: [],
      searchString: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
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
  deleteGame(id) {
    axios
      .delete(`/api/removefromowned/${id}`)
      .then(games => {
        this.setState({
          games: games.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  searchOwnedGames() {
    axios
      .get(`/api/searchowned`)
      .then(response => {
        this.setState({ games: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    let ownedGames = this.state.games.map((game, index) => {
      return (
        <Game
          {...game}
          deleteGame={this.deleteGame}
          deletable={true}
          key={index}
        />
      );
    });
    let searchedGames = this.state.games
      .filter(game => {
        return game.name
          .toLowerCase()
          .includes(this.state.searchString.toLowerCase());
      })
      .map((game, index) => {
        return (
          <Game
            {...game}
            deleteGame={this.deleteGame}
            deletable={true}
            key={index}
          />
        );
      });
    return (
      <div className="list_container">
        <Nav />
        <MobileNav />
        <div className="list_content_container">
          <div className="list_search_container">
            <input
              onChange={this.handleInput}
              name="searchString"
              value={this.state.searchString}
              placeholder="Search My Games"
            />
          </div>
          <div className="list_displayed_games">
            <div className="displayed_games_list">
              {this.state.searchString ? searchedGames : ownedGames}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { updateUser }
)(List);
