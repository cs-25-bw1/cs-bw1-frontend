import axiosWithAuth from "../../util/AxiosWithAuth";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "./types";

export const signIn = (data, history) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth("auth")
      .post("/api/login/", data)
      .then(res => {
        localStorage.setItem("token", res.data.key);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        history.push("/");
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: err
        });
      });
  };
};

export const register = (data, history) => {
  return dispatch => {
    dispatch({ type: REGISTER_START });
    return axiosWithAuth("auth")
      .post("/api/registration/", data)
      .then(res => {
        localStorage.setItem("token", res.data.key);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        history.push("/");
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILURE, payload: err });
      });
  };
};
