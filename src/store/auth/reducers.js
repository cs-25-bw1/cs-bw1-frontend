import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "./types";

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
        isLoading: false,
        error: payload
      };

    default:
      return state;
  }
};

export const register = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_START:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        error: "",
        isAuth: true,
        token: payload.key,
        isLoading: false,
        users: [...state.users, payload]
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };

    default:
      return state;
  }
};
