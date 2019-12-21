import { SET_CURRENT, SET_FIVE_DAYS, SET_NAME } from "../actions/types";

const initialState = {
  name: "",
  currentWeather: {},
  fiveDays: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_CURRENT:
      return { ...state, currentWeather: action.payload };
    case SET_FIVE_DAYS:
      return { ...state, fiveDays: action.payload };
    default:
      return state;
  }
};
