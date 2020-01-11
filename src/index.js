import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./modules/rootReducer";
import App from "./modules/app/app";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";
import { watchSecondScreenSaga } from "./screens/secondScreen/secondScreen.saga";

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(watchSecondScreenSaga);

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <App />
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
