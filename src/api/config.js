import axios from "axios";

const KEY = "UmkXd1Bi01aRaKGSiwsST8648chynwUE";

let instance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
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
export const getCityByCords = (lat, lng) => {
  let latNlng = `${lat},${lng}`;
  return instance.get("/locations/v1/cities/geoposition/search", {
    params: {
      apikey: KEY,
      q: latNlng
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
