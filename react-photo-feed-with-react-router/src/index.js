import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Feed, Profile, Nav, Home } from "./components";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route path={`/feed`} component={Feed} />
        <Route path={`/profiles/:id`} component={Profile} />
        <Route path={"*"} component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
