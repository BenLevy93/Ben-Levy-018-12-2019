import axios from "axios";

const KEY = "TyWV1AWrgZ55S1Do4vJ8xEcGWM0WXjFu";

let instance = axios.create({
  baseURL: "http://dataservice.accuweather.com",
  timeout: 3000
});

export const searchCity = city => {
  return instance.get("/locations/v1/cities/autocomplete", {
    params: {
      apikey: KEY,
      q: city
    }
  });
};
