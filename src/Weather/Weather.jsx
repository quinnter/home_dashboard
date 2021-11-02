import React from "react";
import "./styles.sass";
import * as api from "../api";
import { dummyWeather } from "../data";
import DailyWeatherRow from "./DailyWeatherRow";
import HourlyWeather from "./HourlyWeather";
import CurrentWeather from "./CurrentWeather";
let maxBy = require("lodash/maxBy");
let minBy = require("lodash/minBy");

// const handleClick = () => {
//   api.owmOneCallAPI().then(response => {
//     console.log({ response: response });
//   });
// };

export default function Weather() {
  const [weather, setWeather] = React.useState(dummyWeather);

  //   if (process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY) {
  //     api.owmOneCallAPI().then(response => {
  //       setWeather(response);
  //     });
  //   }

  const minDailyTempObj = minBy(weather.daily, "temp.min");
  const maxDailyTempObj = maxBy(weather.daily, "temp.max");

  return (
    <div className={"largeFrostedSquare"}>
      <div className={"largeSquareInnerContainer"}>
        <CurrentWeather currentWeather={weather.current} />
        <HourlyWeather hourlyWeather={weather.hourly} />
        <div className={"dailyWeatherContainer"}>
          {weather.daily.map(day => {
            return (
              <DailyWeatherRow
                key={day.dt}
                dailyWeather={day}
                rangeMin={minDailyTempObj.temp.min}
                rangeMax={maxDailyTempObj.temp.max}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
