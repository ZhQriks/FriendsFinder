import {
  SET_MESSAGE,
  CLEAR_MESSAGE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./actionTypes";
import AuthService from "../../services/auth.service";

export const setMessage = (message: any) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const register =
  (email: string, password: string) => (dispatch: any) => {
    return AuthService.register(email, password).then(
      (response: any) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { user: response },
        });
        return Promise.resolve();
      },
      (error: any) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };

export const login = (email: string, password: string) => (dispatch: any) => {
  return AuthService.login(email, password).then(
    (response: any) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response },
      });
      console.log(response);
      return Promise.resolve();
    },
    (error: any) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        "Login failed";
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch: any) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
