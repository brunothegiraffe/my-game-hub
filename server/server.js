require("dotenv").config();
const express = require("express");
const session = require("express-session");
const axios = require("axios");
const massive = require("massive");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const PostgresStore = require("connect-pg-simple")(session);
const ctrl = require("./controller");
const authctrl = require("./authcontroller");
const bodyParser = require("body-parser");
const bycrypt = require("bcryptjs");

const app = express();
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;
massive(CONNECTION_STRING).then(db => {
  console.log("db connected");
  app.set("db", db);
});

app.use(bodyParser.json());
app.use(helmet());
app.use(cookieParser());
app.use(
  session({
    store: new PostgresStore({
      conString: CONNECTION_STRING
    }),
    key: "sid",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: true
    },
    name: "my-game-hub"
  })
);

app.get(`/api/gbgames`, ctrl.getGames);
app.put(`/api/updateinfo`, ctrl.updateInfo);
app.post(`/api/addtoowned`, ctrl.addOwned);
app.get("/api/getuserinfo", ctrl.getUserInfo);
app.get("/api/getownedgames", ctrl.getOwnedGames);
// auth routes
app.post("/auth/register", authctrl.register);
app.post("/auth/login", authctrl.login);
// app.get("/auth/userauth", authctrl.verifyAuth);
// app.get("/api/info/:userID", authctrl.getUser);
app.get("/auth/logout", authctrl.logout);

app.listen(SERVER_PORT, () => console.log(`Docked at port: ${SERVER_PORT}`));
