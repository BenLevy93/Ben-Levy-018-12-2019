import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  foreCast: weatherReducer,
  favorites: favoriteReducer
});