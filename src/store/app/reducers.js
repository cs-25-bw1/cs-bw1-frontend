import {
  INIT_PLAYER_START,
  INIT_PLAYER_SUCCESS,
  INIT_PLAYER_FAILURE,
  MOVE_PLAYER_START,
  MOVE_PLAYER_SUCCESS,
  MOVE_PLAYER_FAILURE,
  GET_MAP_START,
  GET_MAP_SUCCESS,
  GET_MAP_FAILURE
} from "./types";

const initialState = {
  error: "",
  map: {},
  player: {},
  isLoading: false,
  isSuccess: false
};

export const gameReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_PLAYER_START:
      return {
        ...state,
        isLoading: true
      };
    case INIT_PLAYER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        player: payload.data
        //
      };
    case INIT_PLAYER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };

    case MOVE_PLAYER_START:
      return {
        ...state,
        isLoading: true
      };

    case MOVE_PLAYER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        player: payload.data
      };
    case MOVE_PLAYER_FAILURE:
      return {
        ...state,
        error: payload.error
      };
    case GET_MAP_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_MAP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        map: payload.data
      };
    case GET_MAP_FAILURE:
      return {
        ...state,
        error: payload.error
      };
    default:
      return state;
  }
};
