import { combineReducers } from "redux";
import userReducer from "./userReducer";

const reducer = combineReducers({
  defaultReducer: userReducer,
});

export default reducer;