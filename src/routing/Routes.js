import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../ui/home/";

import NotFound from "../ui/notfound/";
import AppliedRoute from "./appliedroute/";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <Route component={NotFound} />
  </Switch>;