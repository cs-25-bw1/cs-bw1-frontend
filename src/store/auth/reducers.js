import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

const initialState = {
  error: "",
  isAuth: false,
  isSuccess: false,
  isLoading: false,
  token: "",
  user: {
    username: "",
    password: ""
  }
};

export const signIn = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case LOGIN_SUCCESS:
      console.log("this is the playload", payload);
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        token: payload.key,
        isSuccess: true,
        user: { ...state.user, id: payload.id }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: "",
        isLoading: false,
        error: payload
      };

    default:
      return state;
  }
};
