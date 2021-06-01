import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import Promise from "redux-promise";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import reducer from "./Store/reducer";
const createStoreMiddleware = applyMiddleware(Promise, Thunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreMiddleware(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
