// import { combineReducers } from "redux";
// import { signIn } from "./auth/reducers";
// import { start } from "./app/reducers";

// export default combineReducers({ signIn, start });

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//reducer
import { signIn } from "./auth/reducers";
import { start, move, map } from "./app/reducers";

const middleware = [thunk];

const reducer = combineReducers({
  signIn,
  world: start,
  move: move,
  map: map
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducer, enhancer);

export default store;
