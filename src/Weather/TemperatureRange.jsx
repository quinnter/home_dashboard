import React from "react";

const gradientColours = [
  "darkblue",
  "deepskyblue",
  "greenyellow",
  "gold",
  "orangered"
];

const calculateColourIndex = temperature => {
  if (temperature <= 0) {
    return 0;
  } else if (temperature <= 10) {
    return 1;
  } else if (temperature <= 18) {
    return 2;
  } else if (temperature <= 24) {
    return 3;
  } else {
    return 4;
  }
};

const generateGradientColours = (rangeMin, rangeMax) => {
  // Match the min and max values to colours for the gradient and return as a string
  const colourValues = gradientColours.slice(
    calculateColourIndex(rangeMin),
    calculateColourIndex(rangeMax) + 1
  );

  if (colourValues.length === 1) {
    colourValues.push(colourValues[0]);
  }

  return colourValues.join(",");
};

export default function TemperatureRange({
  rangeMin,
  rangeMax,
  dayMin,
  dayMax
}) {
  const width = 165;
  const widthIncrement = width / (rangeMax - rangeMin);
  // Divide the bar into equal pixels. Ex Range 0 - 10 means each section is 16.5px wide
  const marginPixels = (dayMin - rangeMin) * widthIncrement;
  // Starting point for the gradient div. rangeMin is always far left, dayMin is always >= to rangeMin. Ex if Thu dayMin is 2, we want the margin to be 33px wide
  const rangeWidth = widthIncrement * (dayMax - dayMin);
  // Total range in pixels.

  const gradientColours = generateGradientColours(rangeMin, rangeMax);

  //   I've used inline styling for this component for now because it relies heavily on dynamic values

  return (
    <div
      style={{
        width: `${width}px`,
        backgroundColor: "rgba(0,0,0,0.2)",
        height: 15,
        borderRadius: "25px",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Use background postion to stick gradient to far left, otherwise it starts where gradient component starts */}
      <div
        style={{
          width: rangeWidth,
          marginLeft: `${marginPixels}px`,
          height: "100%",
          borderRadius: "25px",
          backgroundImage: `linear-gradient(to right, ${gradientColours})`,
          backgroundPosition: `-${marginPixels}px 0px`,
          backgroundSize: "165px 15px",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "content-box"
        }}
      ></div>
    </div>
  );
}
