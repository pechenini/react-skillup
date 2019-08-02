import { combineReducers } from "redux";
import postsReducer from "./posts";
import authReducer from "./auth";

const rootReducer = combineReducers({
  posts: postsReducer,
  user: authReducer
});

export default rootReducer;
