import React, { FC } from "react";
import { CommandLineRouter, Switch, Route } from "@giusto/ink-router";

import ConnectionPage from "./pages/Connection";
import QueryPage from "./pages/Query";

const Routes: FC = () => {
  return (
    <CommandLineRouter>
      <Switch>
        <Route exact path="/" component={ConnectionPage} />
        <Route exact path="/query" component={QueryPage} />
      </Switch>
    </CommandLineRouter>
  );
};

export default Routes;
