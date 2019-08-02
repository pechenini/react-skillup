import { LOGIN, LOGOUT } from "./authActionTypes";
import api from "../../../utils/api";
import Auth from "../../../services/auth";

export function login(user) {
  return {
    type: LOGIN,
    payload: user
  };
}

export function loginAsync({ email, password, onSuccess, onError }) {
  return async dispatch => {
    try {
      const loginResponse = await api.post("/auth/login", { email, password });
      Auth.setToken(loginResponse.data.accessToken);

      const userResponse = await api.get("/user");
      dispatch(login(userResponse.data));

      onSuccess(userResponse);
    } catch (e) {
      console.log(e)
      //onError(e);
    }
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function logoutAsync() {
  return async dispatch => {
    try {
    await api.get("/auth/logout");
    Auth.removeToken()
    dispatch(logout());
    window.location.reload()
    } catch(e) {
      Auth.removeToken()
    }
  };
}
