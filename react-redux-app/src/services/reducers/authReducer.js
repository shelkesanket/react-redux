import { LOGIN, LOGOUT } from "../constant";

const authReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN: {
      return true;
    }
    case LOGOUT: {
      return false;
    }
    default:
      return state;
  }
};

export default authReducer;
