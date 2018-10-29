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
          limit: 10,
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
