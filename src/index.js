import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import "./index.css";
import App from "./app/layouts/App";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./app/store/store";

const rootStore = store();

const rootElement = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
};

if (module.hot) {
  module.hot.accept("./app/layouts/App", () => {
    setTimeout(render);
  });
}
render();

registerServiceWorker();
