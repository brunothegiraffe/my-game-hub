const bcrypt = require("bcryptjs");

module.exports = {
  register: (req, res) => {
    const db = req.app.get("db");
    const user = req.body;
    var pwd = bcrypt.hashSync(user.password, 10);
    user.avatar = `https://robohash.org/${user.username}.png`;
    user.password = pwd;
    db.users
      .insert(user)
      .then(u => {
        req.session.user = u;
        delete u.password;
        res.status(201).send(u);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  login: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.login(username)
      .then(([user]) => {
        if (bcrypt.compareSync(password, user.password)) {
          delete user.password;
          req.session.user = user;
          res.status(200).send(user);
        } else {
          res.status(401).send({ error: "Invalid Username or password" });
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  getUser: (req, res) => {
    const { userID } = req.params;
    req.db
      .get_user(userID)
      .then(([user]) => {
        if (!user) {
          res.status(404).send({ error: "Invalid User ID" });
        } else {
          delete user.password;
          res.status(200).send(user);
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  logout: (req, res) => {
    if (req.session.user) {
      req.session.destroy();
      res.status(200).send({ message: "You have logged out." });
    }
  },
  verifyAuth: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send({ message: "You are not logged in." });
    }
  }
};
