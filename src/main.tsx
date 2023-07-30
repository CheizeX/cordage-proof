import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme.ts";
import { GlobalStyleCordage } from "./GlobalStyles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyleCordage />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
