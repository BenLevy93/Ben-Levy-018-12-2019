import axios from "axios";

const KEY = "OxKzv1mME9QTtMNlZc5QFYuLHrUTYS1d";

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

export const getCurrentConditions = cityKey => {
  return instance.get(`/currentconditions/v1/${cityKey}`, {
    params: {
      apikey: KEY
    }
  });
};

export const getFiveDaysForecast = cityKey => {
  return instance.get(`/forecasts/v1/daily/5day/${cityKey}`, {
    params: {
      apikey: KEY,
      metric: true
    }
  });
};
