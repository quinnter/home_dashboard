import React from "react";
import "./styles.sass";

export default function CurrentWeather({ currentWeather }) {
  return (
    <div className={"currentWeatherContainer"}>
      <div className={"currentIconAndTemperatureContainer"}>
        <i class={`wi wi-owm-${currentWeather.weather[0].id} largeIcon`}></i>

        <h2 className={"degreesText"}>{Math.round(currentWeather.temp)}°</h2>
      </div>
      <div className={"weatherDescriptionAndFeelsLike"}>
        <h4>{currentWeather.weather[0].description.toUpperCase()}</h4>
        <h4>{`Feels Like: ${Math.round(currentWeather.feels_like)}°`}</h4>
      </div>
    </div>
  );
}
