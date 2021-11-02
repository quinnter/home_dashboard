import React from "react";
import "./styles.sass";

export default function HourAndMinuteTime({ hour, minute }) {
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <div className={"smallFrostedSquare"}>
        <h1>{hour}</h1>
      </div>
      <div className={"smallFrostedSquare"}>
        <h1>{minute}</h1>
      </div>
    </div>
  );
}
