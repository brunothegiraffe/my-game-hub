import React from "react";
import "./game.css";

function Game(props) {
  const game = {
    index: props.index,
    id: props.id,
    image: props.image,
    name: props.name
  };
  return (
    <div className="game_cards">
      <div className="game_card">
        <p className="game_name">{props.name}</p>
        <img className="game_image" src={props.image.small_url} alt="" />
        {props.deletable ? (
          <button
            className="game_button"
            type="submit"
            onClick={e => props.deleteGame(props.id)}
          >
            Remove Game
          </button>
        ) : (
          <button
            className="game_button"
            type="submit"
            onClick={e => props.addToOwned(game)}
          >
            Add to Owned
          </button>
        )}
      </div>
    </div>
  );
}

export default Game;
