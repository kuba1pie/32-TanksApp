import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.sass";
import App from "./components/App";
//import "@atlaskit/ccc-reset";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";



// 4
ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.body
);
serviceWorker.unregister();
