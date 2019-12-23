import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import weatherReducer from "./weatherReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
  forecast: weatherReducer,
  favorites: favoriteReducer,
  darkMode: themeReducer
});
