import { combineReducers } from "redux";
import BlogReduxReducer from "../Blog/BlogReduxReducer";

const rootReducer = combineReducers({
  blog: BlogReduxReducer,
});
export default rootReducer;
