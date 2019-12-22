import React, { Component } from "react";
import DayCard from "./DayCard";
import CurrentCard from "./CurrentCard";
import { connect } from "react-redux";
import _ from "lodash";

class Home extends Component {
  componentDidMount() {
    //default value
  }
  getImage(image) {
    if (image) {
      return `https://vortex.accuweather.com/adc2010/images/slate/icons/${image}.svg`;
    }
  }

  renderToday() {
    let { WeatherIcon, WeatherText, Temperature } = this.props.currentWeather;

    return (
      <CurrentCard
        imgSrc={this.getImage(WeatherIcon)}
        header={this.props.value.label}
        temp={_.get(Temperature, "Metric.Value", "")}
        desc={WeatherText}
      />
    );
  }
  renderList() {
    return this.props.fiveDays.map((item, index) => {
      let { Date: dayName, Day, Temperature } = item;
      return (
        <DayCard
          key={index}
          day={new Date(dayName).getDay()}
          imgSrc={this.getImage(Day.Icon)}
          minVal={Temperature.Minimum.Value.toFixed(0)}
          maxVal={Temperature.Maximum.Value.toFixed(0)}
        />
      );
    });
  }
  render() {
    return (
      <div id="currentCard" className="ui secondary purple segment">
        <div className="ui five column stackable grid">
          {this.renderToday()}
          {this.renderList()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    value: state.forecast.value,
    currentWeather: state.forecast.currentWeather,
    fiveDays: state.forecast.fiveDays
  };
};
export default connect(mapStateToProps)(Home);
