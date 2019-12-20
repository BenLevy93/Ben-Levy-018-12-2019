import React, { Component } from "react";
import { tokyoData, tokyo5 } from "../data/mock";

class Home extends Component {
  state = {
    cityName: "Tokyo",
    cityData: tokyoData[0],
    weekForecast: tokyo5.DailyForecasts
  };
  getImage(image) {
    return `https://vortex.accuweather.com/adc2010/images/slate/icons/${image}.svg`;
  }

  renderToday() {
    let { WeatherIcon, WeatherText, Temperature } = this.state.cityData;
    let { Value } = Temperature.Metric;
    return (
      <div className=" column row">
        <div className="column">
          <img
            className="ui image small"
            src={this.getImage(WeatherIcon)}
            alt="icon"
          />
        </div>
        <div className="column">
          <h1 className="header">{this.state.cityName}</h1>
          <h3>{`${Value.toFixed(0)} C°, 
          ${WeatherText}`}</h3>
        </div>
        <div className="right floated column">
          <span className="right floated">
            <i className="star outline  icon"></i>
            Add to Favorites
          </span>
        </div>
      </div>
    );
  }
  renderList() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return this.state.weekForecast.map((item, index) => {
      let { Date: dayName, Day, Temperature } = item;
      return (
        <div className="column" key={index}>
          <div className="ui purple card">
            <div className="content">
              <div className="ui medium header">
                {days[new Date(dayName).getDay()]}
              </div>
            </div>
            <div className="content">
              <img
                className="ui image mini left floated"
                src={this.getImage(Day.Icon)}
                alt="icon"
              />
              <div className="right floated">
                {`${Temperature.Minimum.Value}°/${Temperature.Maximum.Value}°`}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui secondary purple segment">
        <div className="ui five column stackable grid">
          {this.renderToday()}
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default Home;
