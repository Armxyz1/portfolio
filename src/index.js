import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/font-awesome/css/all.css";
import favicon from "./assets/images/AK_favicon_round.png";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Set favicon to the project's AK_favicon_round.png (CRA will provide processed URL)
try {
  const setFavicon = (url) => {
    const links = document.querySelectorAll(
      'link[rel*="icon"], link[rel="apple-touch-icon"]'
    );
    links.forEach((link) => {
      link.href = url;
    });
    const msTile = document.querySelector(
      'meta[name="msapplication-TileImage"]'
    );
    if (msTile) msTile.setAttribute("content", url);
    const appFavicon = document.getElementById("app-favicon");
    if (appFavicon) appFavicon.href = url;
  };
  setFavicon(favicon);
} catch (e) {
  // ignore if DOM not ready or element missing
}
