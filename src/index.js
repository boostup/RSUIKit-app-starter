import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import store from "./redux/store";
import reducers from './redux/index';
import App from "./ui/app/";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
