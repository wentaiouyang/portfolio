import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Resume from "../container/Resume/Resume";
import Home from "../container/Home/Home";

function Router() {
  return (
    <Switch>
      <Route path="/work" exact component={Home} />
      <Route path="/resume" exact component={Resume} />
      <Redirect from="/" to="/work" />
    </Switch>
  );
}

export default Router;
