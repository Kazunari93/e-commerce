import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  err: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        err: null,
      };
    case UserActionTypes.GOOGLE_SIGN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_FAILURE:
      return {
        ...state,
        err: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
