const axios = require("axios");
const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET } = process.env;

module.exports = {
  login: (req, res) => {
    console.log("hit the endpoint");
    const { username, password } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .login_user([username, password])
      .then(response => {
        console.log(response);
        {
          req.session.userid = response[0].id;
        }
        res.status(200).send(response);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  },

  registerUser: (req, res) => {
    console.log("hit the endpoint");
    const { username, password } = req.body;
    console.log(`data: `, username, password);

    const dbInstance = req.app.get("db");
    dbInstance
      .register_user([email, username, password])
      .then(response => {
        console.log(response);
        res.status(200).send(response);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  },

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
          limit: 20,
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
  }
};
