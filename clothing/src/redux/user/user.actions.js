import UserActionTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_START,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_SUCCESS,
  payload: user,
});

export const signInFailure = (err) => ({
  type: UserActionTypes.SIGN_FAILURE,
  payload: err,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_START,
  payload: emailAndPassword,
});
