import { combineReducers } from "redux";
import winesReducer from "./winesReducer";
import { RESET_STORE } from "../actions";

const appReducer = combineReducers({
  wines: winesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
