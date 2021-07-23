import React from "react";
import { css, Global } from "@emotion/react";
import { Header } from "./componets/Header";
import normalize from "./styles/normalize";

function App() {
  return (
    <div>
      <Global
        styles={css`
          ${normalize}
        `}
      />
      <Header />
    </div>
  );
}

export default App;
