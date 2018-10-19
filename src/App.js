import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
// import Login from "./components/login/Login";
// import Nav from "./components/nav/Nav";

class App extends Component {
  render() {
    return <div className="App">{routes}</div>;
  }
}

export default App;
