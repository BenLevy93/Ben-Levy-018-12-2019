import React, { Component } from "react";
import { tokyoData, tokyo5 } from "../data/mock";
import DayCard from "./DayCard";
import CurrentCard from "./CurrentCard";

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
      <CurrentCard
        imgSrc={this.getImage(WeatherIcon)}
        header={this.state.cityName}
        temp={Value.toFixed(0)}
        desc={WeatherText}
      />
    );
  }
  renderList() {
    return this.state.weekForecast.map((item, index) => {
      let { Date: dayName, Day, Temperature } = item;
      return (
        <DayCard
          key={index}
          day={new Date(dayName).getDay()}
          imgSrc={this.getImage(Day.Icon)}
          minVal={Temperature.Minimum.Value}
          maxVal={Temperature.Maximum.Value}
        />
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
