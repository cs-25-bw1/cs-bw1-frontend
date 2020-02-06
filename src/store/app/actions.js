import axiosWithAuth from "../../util/AxiosWithAuth";

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

export const initWorld = () => {
  return dispatch => {
    dispatch({ type: INIT_PLAYER_START });
    axiosWithAuth("app")
      .get("/api/adv/init/")
      .then(res => {
        dispatch({ type: INIT_PLAYER_SUCCESS, payload: res });
      })
      .catch(err => {
        dispatch({ type: INIT_PLAYER_FAILURE, payload: err });
      });
  };
};

export const movePlayer = direction => {
  return dispatch => {
    dispatch({ type: MOVE_PLAYER_START });
    axiosWithAuth("app")
      .post("/api/adv/move/", { direction: direction })
      .then(res => {
        dispatch({ type: MOVE_PLAYER_SUCCESS, payload: res });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: MOVE_PLAYER_FAILURE, payload: err });
      });
  };
};

export const getMap = () => {
  return dispatch => {
    dispatch({ type: GET_MAP_START });
    axiosWithAuth("app")
      .get("/api/adv/rooms/")
      .then(res => {
        dispatch({ type: GET_MAP_SUCCESS, payload: res });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_MAP_FAILURE, payload: err });
      });
  };
};
