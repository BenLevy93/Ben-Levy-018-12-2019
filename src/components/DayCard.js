import React from "react";
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const DayCard = ({ day, imgSrc, minVal, maxVal }) => {
  return (
    <div className="column">
      <div className="ui purple card">
        <div className="content">
          <div className="ui medium header">{days[day]}</div>
        </div>
        <div className="content">
          <img className="ui image mini left floated" src={imgSrc} alt="icon" />
          <div className="right floated">{`${minVal}°/${maxVal}°`}</div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
