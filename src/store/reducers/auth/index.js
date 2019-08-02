import { LOGIN, LOGOUT } from "../../actions/auth/authActionTypes";

const initialState = null;

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return payload;
    case LOGOUT:
      return null;
    default:
      return  state;
  }
}

export default authReducer;
