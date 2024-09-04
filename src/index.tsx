import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/GlobalStyled";
import { ButtonBackToTop } from "./components/ButtonBackToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <ButtonBackToTop />
  </React.StrictMode>
);
reportWebVitals();
