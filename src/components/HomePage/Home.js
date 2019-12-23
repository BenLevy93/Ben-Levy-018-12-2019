import React, { Component } from "react";
import DayCard from "./DayCard";
import CurrentCard from "./CurrentCard";
import { connect } from "react-redux";
import _ from "lodash";

class Home extends Component {
  state = {
    units: false
  };
  toggleUnits = () => {
    this.setState({ units: !this.state.units });
  };
  getImage(image) {
    if (image) {
      return `https://vortex.accuweather.com/adc2010/images/slate/icons/${image}.svg`;
    }
  }
  getTemp = temp => {
    if (temp !== "") {
      if (this.state.units) {
        //F
        return (temp * 1.8 + 32).toFixed(0);
      } else {
        //C
        return temp.toFixed(0);
      }
    }
  };

  renderToday() {
    let { WeatherIcon, WeatherText, Temperature } = this.props.currentWeather;

    return (
      <CurrentCard
        imgSrc={this.getImage(WeatherIcon)}
        header={this.props.value.label}
        temp={this.getTemp(_.get(Temperature, "Metric.Value", ""))}
        desc={WeatherText}
        units={this.state.units}
        toggleUnits={this.toggleUnits}
        unitType={this.state.units ? "F" : "C"}
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
          minVal={this.getTemp(Temperature.Minimum.Value)}
          maxVal={this.getTemp(Temperature.Maximum.Value)}
          darkMode={this.props.darkMode}
        />
      );
    });
  }
  render() {
    return (
      <div
        id={this.props.darkMode ? "darkCurrentCard" : "currentCard"}
        className="ui secondary segment"
      >
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
    fiveDays: state.forecast.fiveDays,
    darkMode: state.darkMode
  };
};
export default connect(mapStateToProps)(Home);
