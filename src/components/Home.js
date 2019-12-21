import React, { Component } from "react";
import DayCard from "./DayCard";
import CurrentCard from "./CurrentCard";
import { fetchCity } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";

class Home extends Component {
  state = {
    cityKey: "215854",
    cityName: "Tel Aviv"
  };
  componentDidMount() {
    this.props.fetchCity({ value: "Tel Aviv", key: "215854" });
  }
  getImage(image) {
    return `https://vortex.accuweather.com/adc2010/images/slate/icons/${image}.svg`;
  }

  renderToday() {
    let { WeatherIcon, WeatherText, Temperature } = this.props.currentWeather;

    return (
      <CurrentCard
        imgSrc={this.getImage(WeatherIcon)}
        header={this.props.name}
        temp={_.get(Temperature, "Metric.Value", 10)}
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
const mapStateToProps = state => {
  return {
    name: state.forecast.name,
    currentWeather: state.forecast.currentWeather,
    fiveDays: state.forecast.fiveDays
  };
};
export default connect(mapStateToProps, { fetchCity })(Home);
