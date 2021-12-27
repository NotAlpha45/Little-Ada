import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import App from "./App";

// Store is the stored data of all the reducers.
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Since we are using redux, we need Provider, which makes the stored item
// of redux available to all the components of the app.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
