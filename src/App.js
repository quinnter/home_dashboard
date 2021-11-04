import "./App.css";
import DateAndTimeContainer from "./DateAndTime/DateAndTimeContainer";
import Weather from "./Weather/Weather";
import FlipClock from "./FlipClock/FlipClock";

function App() {
  return (
    <div className="background-container">
      <div className="background"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px"
        }}
      >
        <FlipClock />
        {/* <DateAndTimeContainer /> */}
        <Weather />
      </div>
    </div>
  );
}

export default App;
