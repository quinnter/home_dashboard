import "./App.css";
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
        <Weather />
      </div>
    </div>
  );
}

export default App;
