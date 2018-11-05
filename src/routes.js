import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import FindGames from "./components/findGames/FindGames";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

export default (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/findgames" component={FindGames} />
    <Route path="/lists" component={List} />
  </Switch>
);
