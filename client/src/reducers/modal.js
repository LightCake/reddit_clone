import { TOGGLE_SIGN_IN, TOGGLE_SIGN_UP } from "../actions/modal";

const initialState = {
  sign_in: false,
  sign_up: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIGN_IN:
      return {
        ...state,
        sign_in: !state.sign_in
      };
    case TOGGLE_SIGN_UP:
      return {
        ...state,
        sign_up: !state.sign_up
      };
    default:
      return state;
  }
};
