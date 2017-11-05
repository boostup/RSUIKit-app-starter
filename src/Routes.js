import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./loadables";

import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <Route component={NotFound} />
  </Switch>;