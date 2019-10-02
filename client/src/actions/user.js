import * as API from "../utils/user";

// ACTION TYPES
export const SIGN_IN = "SIGN_IN";

export const sign_in = async data => {
  console.log(await API.sign_in(data));
};
