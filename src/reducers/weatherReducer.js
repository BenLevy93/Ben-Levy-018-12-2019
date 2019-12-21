import { SET_CURRENT, SET_FIVE_DAYS } from "../actions/types";

const initialState = {
  currentWeather: {},
  fiveDays: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT:
      return { ...state, currentWeather: action.payload };
    case SET_FIVE_DAYS:
      return { ...state, fiveDays: action.payload };
    default:
      return state;
  }
};
