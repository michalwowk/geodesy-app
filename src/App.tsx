import React from "react";
import { css, Global } from "@emotion/react";
import normalize from "./styles/normalize";
import { BrowserRouter as Router } from "react-router-dom";

const AuthenticatedApp = React.lazy(
  () => import("./componets/AuthenticatedApp")
);
const UnauthenticatedApp = React.lazy(
  () => import("./componets/UnauthenticatedApp")
);

function App() {
  const userAuthenticated = true;

  return (
    <Router>
      <div>
        <Global
          styles={css`
            ${normalize}
          `}
        />
        {userAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </Router>
  );
}

export default App;
