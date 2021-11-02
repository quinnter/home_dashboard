import React from "react";
import "./styles.sass";

export default function HourlyWeather({ hourlyWeather }) {
  return (
    <div className={"hourlyContainer"}>
      {hourlyWeather.slice(0, 5).map(hour => {
        return (
          <div key={hour.dt} className={"hourlyWeather"}>
            <p>
              {new Date(hour.dt * 1000).toLocaleString("default", {
                hour: "numeric",
                hour12: true
              })}
            </p>
            <i class={`wi wi-owm-${hour.weather[0].id} `}></i>
            <p className={"tempText"}>{`${Math.round(hour.temp)}°`}</p>
          </div>
        );
      })}
    </div>
  );
}
