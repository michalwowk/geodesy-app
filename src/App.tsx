import React, { Suspense } from "react";
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
        <Suspense fallback={<div>loading...</div>}>
          {userAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
