import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case DELETE_FAVORITE:
      return state.filter(city => city !== action.payload);
    default:
      return state;
  }
};
