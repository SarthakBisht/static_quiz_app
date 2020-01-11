import { combineReducers } from "redux";
import * as actionTypes from "./secondScreen.actionType";

export default combineReducers({
  count
});

function count(state = 5, action) {
  switch (action.type) {
    case "INCREMENT_ASYNC":
      console.log(action);
      return state + action.payload;
    case actionTypes.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}
