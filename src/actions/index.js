import { getCurrentConditions, getFiveDaysForecast } from "../api/config";
import {
  SET_CURRENT,
  SET_FIVE_DAYS,
  ADD_FAVORITE,
  DELETE_FAVORITE
} from "./types";

export const fetchCity = async cityKey => {
  let curWetherRes = await getCurrentConditions(cityKey);
  currentWeather(curWetherRes.data);
  let fiveDaysRes = await getFiveDaysForecast(cityKey);
  fiveDaysWeather(fiveDaysRes.data.DailyForecasts);
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
const addFavorite = city => {
  return {
    type: ADD_FAVORITE,
    payload: city
  };
};
const deleteFavorite = city => {
  return {
    type: DELETE_FAVORITE,
    payload: city
  };
};
