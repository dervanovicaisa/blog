import { createStore , applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/index";

const initialState = {};

const middleware = [thunk];

let ReduxStore;

ReduxStore = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default ReduxStore;
