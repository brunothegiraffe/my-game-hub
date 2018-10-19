import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import FindGames from "./components/findGames/FindGames";
import List from "./components/list/List";
import Login from "./components/login/Login";

export default (
  <div>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/findgames" component={FindGames} />
      <Route path="/list" component={List} />
    </Switch>
  </div>
);
