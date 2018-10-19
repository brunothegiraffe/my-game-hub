const axios = require("axios");
const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET } = process.env;

module.exports = {
  authZero: async (req, res) => {
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: `http://${req.headers.host}/auth/callback`
    };
    // post request with code for token
    let tokenRes = await axios.post(
      `https://${REACT_APP_DOMAIN}/oauth/token`,
      payload
    );
    // use token to get user data
    let userRes = await axios.get(
      `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
        tokenRes.data.access_token
      }`
    );

    console.log(userRes.data);

    const db = app.get("db");
    let foundCustomer = await db.find_customer([sub]);
    if (foundCustomer[0]) {
      // found user existing in the db, put the returned user on session
      req.session.user = foundCustomer[0];
    } else {
      // no user was found by that google id. create new user in db
      let createdCust = await db.create_customer([name, sub, picture, email]);
      req.session.user = createdCust[0];
    }
    res.redirect("/#/private");
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
