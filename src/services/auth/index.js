import api from "../../utils/api";
import store from "../../store";
import {
  loginAsync as authLogin,
  login as userDataStore,
  logoutAsync as authLogout
} from "../../store/actions/auth";
import axios from "axios";

class Auth {
  constructor() {
    this.storeUser = null;
    store.subscribe(() => {
      if (this.storeUser !== store.getState().user) {
        this.storeUser = store.getState().user;
      }
    });
    if (this.isLogged()) {
      axios.defaults.headers["Authorization"] =
        "Bearer " + localStorage.getItem("access_token");
    }
  }

  async register({ data, onSuccess, onError }) {
    try {
      await api.post("/auth/register", data);
      store.dispatch(authLogin({ ...data, onSuccess, onError}));
    } catch (e) {
      console.log(e);
    }
  }

  login({ email, password, onSuccess, onError }) {
    store.dispatch(authLogin({ email, password, onSuccess, onError }));
  }

  logout() {
    store.dispatch(authLogout());
  }

  isLogged() {
    return !!localStorage.getItem("access_token");
  }

  async user() {
    try {
      if (!this.storeUser) {
        const user = await api.get("/user");
        store.dispatch(userDataStore(user.data));
      }
    } catch (e) {
      this.removeToken();
    }
    return this.storeUser;
  }

  setToken(token) {
    localStorage.setItem("access_token", token);
    axios.defaults.headers["Authorization"] = "Bearer " + token;
  }

  removeToken() {
    localStorage.removeItem("access_token");
    axios.defaults.headers["Authorization"] = null;
  }
}

export default new Auth();
