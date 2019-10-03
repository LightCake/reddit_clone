import * as API from "../utils/user";

// ACTION TYPES
export const SIGN_IN = "SIGN_IN";
export const RECEIVE_USER = "RECEIVE_USER";

// ACTION CREATORS
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const sign_up = data => async dispatch => {
  // result = { acessToken, user }
  const result = await API.sign_up(data);
  // Set the current authenticated user.
  dispatch(receiveUser(result.data.user));
  // TODO: Access Token
};
