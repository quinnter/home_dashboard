import React from "react";
import "./styles.sass";

export default function Weekday({ weekday }) {
  return (
    <div className={"smallFrostedRectangle"}>
      <h1>{weekday}</h1>
    </div>
  );
}
