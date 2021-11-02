import React from "react";
import "./styles.sass";
import TemperatureRange from "./TemperatureRange";

export default function DailyWeatherRow({ dailyWeather, rangeMin, rangeMax }) {
  console.log(dailyWeather);
  return (
    <div className="dailyWeatherRowContainer">
      <div style={{ width: "10%" }}>
        <p style={{ margin: 0 }}>
          {new Date(dailyWeather.dt * 1000)
            .toLocaleString("default", { weekday: "short" })
            .toLocaleUpperCase()}
        </p>
      </div>
      <div className={"iconAndRainProbability"}>
        <i
          class={`wi wi-owm-${dailyWeather.weather[0].id}`}
          style={{ fontSize: "20px" }}
        ></i>
        {dailyWeather.pop >= 1 && (
          <p className={"rainProbabilityText"}>{dailyWeather.pop}%</p>
        )}
      </div>
      <div className={"temperatureRangeContainer"}>
        <div style={{ width: 30 }}>
          <p className={"minTemperatureText"}>
            {`${Math.round(dailyWeather.temp.min)}°`}
          </p>
        </div>

        <TemperatureRange
          rangeMin={rangeMin}
          rangeMax={rangeMax}
          dayMin={dailyWeather.temp.min}
          dayMax={dailyWeather.temp.max}
        />
        <div style={{ width: 30 }}>
          <p className={"maxTemperatureText"}>{`${Math.round(
            dailyWeather.temp.max
          )}°`}</p>
        </div>
      </div>
    </div>
  );
}
