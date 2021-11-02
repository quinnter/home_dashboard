import React from "react";
import "./styles.sass";
import HourAndMinuteTime from "./HourAndMinuteTime";
import Weekday from "./Weekday";
import MonthAndDay from "./MonthAndDay";

export default function DateAndTimeContainer() {
  const time = new Date();
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [day, setDay] = React.useState(time.getDate());
  const [weekday, setWeekday] = React.useState(
    time.toLocaleString("default", { weekday: "long" }).toLocaleUpperCase()
  );
  const [month, setMonth] = React.useState(
    time.toLocaleString("default", { month: "short" }).toLocaleUpperCase()
  );

  const updateTime = () => {
    // get new date
    const time = new Date();
    // set time units
    const currentHours = time.getHours();
    const currentMinutes = time.getMinutes();
    const currentDay = time.getDate();
    const currentWeekday = time
      .toLocaleString("default", { weekday: "long" })
      .toLocaleUpperCase();
    const currentMonth = time
      .toLocaleString("default", { month: "short" })
      .toLocaleUpperCase();
    if (currentHours !== hours) {
      setHours(currentHours);
    }
    if (currentMinutes !== minutes) {
      setMinutes(currentMinutes);
    }
    if (currentDay !== day) {
      setDay(currentDay);
    }
    if (currentWeekday !== weekday) {
      setWeekday(currentWeekday);
    }
    if (currentMonth !== month) {
      setMonth(currentMonth);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={"dateAndTimeContainer"}>
      <HourAndMinuteTime hour={hours} minute={minutes} />
      <Weekday weekday={weekday} />
      <MonthAndDay month={month} day={day} />
    </div>
  );
}
