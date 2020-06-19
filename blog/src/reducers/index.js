import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// trick redux to remove error

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});
