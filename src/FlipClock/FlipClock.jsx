import React from "react";
import "./test.sass";

// function component
const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

const FlipUnitContainerWeekday = ({ weekday, shuffle }) => {
  const time = new Date();
  const currentValue = weekday;
  const previousValue = time.setDate(time.getDate() - 1);
  const yesterday = new Date(previousValue);
  const previousValueAsString = yesterday
    .toLocaleString("default", { weekday: "long" })
    .toLocaleUpperCase();

  // shuffle digits
  const weekday1 = shuffle ? previousValueAsString : currentValue;
  const weekday2 = !shuffle ? previousValueAsString : currentValue;

  // shuffle animations
  const animation1 = shuffle
    ? "flipCard fold weekday"
    : " flipCard unfold month";
  const animation2 = !shuffle
    ? "flipCard fold weekday"
    : "flipCard unfold weekday";

  return (
    <div className={"flipUnitContainer large"}>
      <StaticCard position={"upperCard weekday"} digit={currentValue} />
      <StaticCard
        position={"lowerCard weekday"}
        digit={previousValueAsString}
      />
      <AnimatedCard digit={weekday1} animation={animation1} />
      <AnimatedCard digit={weekday2} animation={animation2} />
    </div>
  );
};

const FlipUnitContainerMonth = ({ month, shuffle }) => {
  const time = new Date();
  const currentValue = month;
  const previousValue = time.setMonth(time.getMonth() - 1);
  const lastMonth = new Date(previousValue);
  const previousValueAsString = lastMonth
    .toLocaleString("default", { month: "short" })
    .toLocaleUpperCase();
  // shuffle digits
  const month1 = shuffle ? previousValueAsString : currentValue;
  const month2 = !shuffle ? previousValueAsString : currentValue;

  // shuffle animations
  const animation1 = shuffle ? "flipCard fold month" : "flipCard unfold month";
  const animation2 = !shuffle ? "flipCard fold month" : "flipCard unfold month";

  return (
    <div className={"flipUnitContainer"}>
      <StaticCard position={"upperCard month"} digit={currentValue} />
      <StaticCard position={"lowerCard month"} digit={previousValueAsString} />
      <AnimatedCard digit={month1} animation={animation1} />
      <AnimatedCard digit={month2} animation={animation2} />
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  if (unit !== "hours") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "flipCard fold" : " flipCard unfold";
  const animation2 = !shuffle ? "flipCard fold" : "flipCard unfold";

  return (
    <div className={"flipUnitContainer"}>
      <StaticCard position={"upperCard"} digit={currentDigit} />
      <StaticCard position={"lowerCard"} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

export default function FlipClock() {
  const time = new Date();
  const [hours, setHours] = React.useState(0);
  const [hoursShuffle, setHoursShuffle] = React.useState(true);
  const [minutes, setMinutes] = React.useState(0);
  const [minutesShuffle, setMinutesShuffle] = React.useState(true);
  const [day, setDay] = React.useState(time.getDate());
  const [dayShuffle, setDayShuffle] = React.useState(true);
  const [weekday, setWeekday] = React.useState(
    time.toLocaleString("default", { weekday: "long" }).toLocaleUpperCase()
  );
  const [weekdayShuffle, setWeekdayShuffle] = React.useState(true);
  const [month, setMonth] = React.useState(
    time.toLocaleString("default", { month: "short" }).toLocaleUpperCase()
  );
  const [monthShuffle, setMonthShuffle] = React.useState(true);

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
    // on hour chanage, update hours and shuffle state
    if (currentHours !== hours) {
      const changeHoursShuffle = !hoursShuffle;
      setHours(currentHours);
      setHoursShuffle(changeHoursShuffle);
    }
    // on minute chanage, update minutes and shuffle state
    if (currentMinutes !== minutes) {
      const changeMinutesShuffle = !minutesShuffle;
      setMinutes(currentMinutes);
      setMinutesShuffle(changeMinutesShuffle);
    }
    if (currentDay !== day) {
      const changeDayShuffle = !dayShuffle;
      setDay(currentDay);
      setDayShuffle(changeDayShuffle);
    }
    if (currentWeekday !== weekday) {
      const changeWeekdayShuffle = !weekdayShuffle;
      setWeekday(currentWeekday);
      setWeekdayShuffle(changeWeekdayShuffle);
    }
    if (currentMonth !== month) {
      const changeMonthShuffle = !monthShuffle;
      setMonth(currentMonth);
      setMonthShuffle(changeMonthShuffle);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "1em",
        // backgroundColor: "black",
        alignItems: "center",
        flexDirection: "column",
        padding: "2em"
      }}
    >
      <div className={"flipClock"}>
        <FlipUnitContainer
          unit={"hours"}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={"minutes"}
          digit={minutes}
          shuffle={minutesShuffle}
        />
      </div>
      <div className={"flipClock"}>
        <FlipUnitContainerWeekday
          weekday={weekday}
          shuffle={weekdayShuffle}
          time={time}
        />
      </div>
      <div className={"flipClock"}>
        <FlipUnitContainerMonth month={month} shuffle={monthShuffle} />
        <FlipUnitContainer digit={day} shuffle={dayShuffle} unit={"days"} />
      </div>
    </div>
  );
}
