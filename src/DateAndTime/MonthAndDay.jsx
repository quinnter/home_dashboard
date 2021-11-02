import React from "react";
import "./styles.sass";

export default function MonthAndDay({ month, day }) {
  if (day < 10) {
    day = `0${day}`;
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
        <h1>{month}</h1>
      </div>
      <div className={"smallFrostedSquare"}>
        <h1>{day}</h1>
      </div>
    </div>
  );
}
