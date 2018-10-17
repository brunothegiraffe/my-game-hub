require("dotenv").config();
const express = require("express");
const session = require("express-session");
const axios = require("axios");
const massive = require("massive");
const ctrl = require("./controller");
const bodyParser = require("body-parser");

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;

massive(CONNECTION_STRING).then(db => app.set("db", db));

app.use(bodyParser.json());
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.get("/auth/callback", ctrl.authZero);
app.get("/api/gbgames", ctrl.getGames);

app.listen(SERVER_PORT, () => console.log(`Docked at port: ${SERVER_PORT}`));
