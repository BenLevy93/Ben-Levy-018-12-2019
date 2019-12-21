import React from "react";

const CurrentCard = ({ imgSrc, header, temp, desc }) => {
  return (
    <div className=" column row">
      <div className="column">
        <img className="ui image small" src={imgSrc} alt="icon" />
      </div>
      <div className="column">
        <h1 className="header">{header}</h1>
        <h3>{`${temp} C°, 
          ${desc}`}</h3>
      </div>
      <div className="right floated column">
        <span className="right floated">
          <i className="star outline  icon"></i>
          Add to Favorites
        </span>
      </div>
    </div>
  );
};

export default CurrentCard;
