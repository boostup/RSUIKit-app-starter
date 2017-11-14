import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../demo-app/loadables";

import NotFound from "../demo-app/notfound/NotFound";
import AppliedRoute from "./appliedroute/AppliedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <Route component={NotFound} />
  </Switch>;