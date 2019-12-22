import { getCurrentConditions, getFiveDaysForecast } from "../api/config";
import { ToastsStore } from "react-toasts";
import {
  SET_NAME,
  SET_CURRENT,
  SET_FIVE_DAYS,
  ADD_FAVORITE,
  DELETE_FAVORITE
} from "./types";

export const fetchCity = city => async dispatch => {
  try {
    let curWetherRes = await getCurrentConditions(city.key);
    let fiveDaysRes = await getFiveDaysForecast(city.key);
    dispatch(setCityName(city));
    dispatch(currentWeather(curWetherRes.data[0]));
    dispatch(fiveDaysWeather(fiveDaysRes.data.DailyForecasts));
  } catch (e) {
    console.log("Here");
    ToastsStore.error("Failed to load city , ", e);
  }
};

const setCityName = nameAndKey => {
  return {
    type: SET_NAME,
    payload: nameAndKey
  };
};

const currentWeather = currentForecast => {
  return {
    type: SET_CURRENT,
    payload: currentForecast
  };
};

const fiveDaysWeather = fiveDaysForecast => {
  return {
    type: SET_FIVE_DAYS,
    payload: fiveDaysForecast
  };
};
export const addFavorite = city => {
  ToastsStore.success("Added");
  return {
    type: ADD_FAVORITE,
    payload: city
  };
};
export const deleteFavorite = city => {
  ToastsStore.warning("Removed");
  return {
    type: DELETE_FAVORITE,
    payload: city
  };
};
