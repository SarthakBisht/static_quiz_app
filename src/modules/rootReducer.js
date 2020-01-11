import { combineReducers } from "redux";
import secondScreenReducer from "../screens/secondScreen/secondScreen.reducer";

export default combineReducers({
  secondScreenData: secondScreenReducer
});
