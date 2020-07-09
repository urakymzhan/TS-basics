import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// Functional Component Example:
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };
