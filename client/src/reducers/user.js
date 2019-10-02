import { SIGN_IN } from "../actions/user";

const initialState = {
  authenticated: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        authenticated: action.user
      };
    default:
      return state;
  }
};
