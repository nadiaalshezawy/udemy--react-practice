import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  //console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));

  //refactoring usin lodash
  /*
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
    */
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  //console.log(response);
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  //console.log(response);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/*
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  //console.log(response);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
*/
