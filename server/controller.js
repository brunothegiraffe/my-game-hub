const axios = require("axios");

module.exports = {
  getGames: (req, res) => {
    const { search } = req.query;
    console.log(req.query);
    console.log("hit the endpoint");

    console.log(`Querying GB api with string: ${search}`);
    return axios
      .get(`https://www.giantbomb.com/api/search/`, {
        params: {
          api_key: process.env.GB_KEY,
          resources: "game",
          query: search,
          limit: 15,
          format: "JSON"
        }
      })
      .then(response => {
        // console.log(response.data.results);

        res.status(200).send(response.data.results);
      })
      .catch(err => {
        console.log(err);
        res.status(err.response.status).send(err.response.data);
      });
  },
  getOwnedGames: (req, res) => {
    console.log("hit the getOwnedGames endpoint");
    const dbInstance = req.app.get("db");
    const { id } = req.session.user.id;
    dbInstance
      .get_owned_games([id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateInfo: (req, res) => {
    console.log(req.body);
    const { id, username, email } = req.body.user;
    console.log("data:", username, email);

    const dbInstance = req.app.get("db");
    dbInstance
      .update_info([id, username, email])
      .then(response => {
        console.log(response);
        res.status(200).send(response);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  },
  addOwned: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, image } = req.body.ownedGame;

    dbInstance
      .add_game_to_owned([name, image])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  getUserInfo: (req, res) => {
    res.status(200).send(req.session.user);
  }
};
