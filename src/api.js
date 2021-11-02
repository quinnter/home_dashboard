const axios = require("axios");

export const owmOneCallAPI = async query => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LON}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric&exclude=minutely`
  );
  return data;
};
