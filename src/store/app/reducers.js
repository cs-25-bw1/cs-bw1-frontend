import {
  INIT_START,
  INIT_SUCCESS,
  INIT_FAILURE,
  MOVE_PLAYER_START,
  MOVE_PLAYER_SUCCESS,
  MOVE_PLAYER_FAILURE
} from "./types";

const initialState = {
  error: "",
  world: [],
  isLoading: false,
  isSuccess: false
};

export const start = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case INIT_SUCCESS:
      // console.log("this is the payload", payload);
      return {
        ...state,
        error: "",
        isLoading: false,
        world: payload.data
      };
    case INIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };

    default:
      return state;
  }
};

export const move = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVE_PLAYER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case MOVE_PLAYER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        // payload ??? to locaton?
        world: payload.data
      };
    case MOVE_PLAYER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    default:
      return state;
  }
};
