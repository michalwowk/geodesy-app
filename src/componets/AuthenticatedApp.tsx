import React from "react";
import { Route, Switch } from "react-router-dom";

import { Dashboard } from "views/Dashboard";
import { BoardProvider } from "context/boardContext";
import { Home } from "views/Home";
import { Header } from "./Header";

const AuthenticatedApp = () => {
  return (
    <BoardProvider>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </BoardProvider>
  );
};

export default AuthenticatedApp;
