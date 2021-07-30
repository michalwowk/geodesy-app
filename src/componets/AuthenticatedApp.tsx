import React from "react";
import { Route, Switch } from "react-router-dom";

import { Dashboard } from "views/Dashboard";
import { ProjectsProvider } from "context/projectsContext";
import { Home } from "views/Home";
import { Header } from "./Header";

const AuthenticatedApp = () => {
  return (
    <ProjectsProvider>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </ProjectsProvider>
  );
};

export default AuthenticatedApp;
