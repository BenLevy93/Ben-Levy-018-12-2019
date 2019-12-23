import { TOGGLE_THEME } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      if (action.payload) {
        return true;
      } else {
        return false;
      }
    default:
      return state;
  }
};
