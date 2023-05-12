import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialStore = {
  users: [],
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
