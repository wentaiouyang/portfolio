import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Resume from "../container/Resume/Resume"
import Home from "../container/Home/Home"
import DetailPage from "../container/DetailPage/DetailPage"

function Router() {
  return (
    <Switch>
      <Route path="/work" exact component={Home} />
      <Route path="/resume" exact component={Resume} />
      <Route path="/detail/:title/:id" exact component={DetailPage} />
      <Redirect from="/" to="/work" />
    </Switch>
  )
}

export default Router
