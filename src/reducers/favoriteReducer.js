import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return state;
    default:
      return state;
  }
};
