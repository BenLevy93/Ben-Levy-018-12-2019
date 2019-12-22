import React from "react";
import { connect } from "react-redux";
import { getCurrentConditions } from "../../api/config";
import { deleteFavorite, fetchCity } from "../../actions";
import { Link } from "react-router-dom";
import { ToastsStore } from "react-toasts";
import _ from "lodash";

class FaveCard extends React.Component {
  state = {
    list: []
  };
  componentDidMount() {
    this.getCitiesInfo(this.props.faveList);
  }
  getCitiesInfo = async citiesList => {
    const pArray = citiesList.map(async city => {
      let cityObj = {};
      cityObj.value = city;
      const response = await getCurrentConditions(city.key);
      cityObj.forecast = response.data[0];
      return cityObj;
    });
    const cities = await Promise.all(pArray);
    this.setState({ list: cities });
  };
  renderList() {
    return this.state.list.map(city => {
      let { Temperature, WeatherText } = city.forecast;
      return (
        <div className="column">
          <div id="faveCard" className="ui purple card">
            <div className="content">
              <div className="ui medium header">{city.value.label}</div>
            </div>
            <div className="content">
              <div>{`${_.get(Temperature, "Metric.Value", 10).toFixed(
                0
              )}°, ${WeatherText}`}</div>
            </div>
            <div className="extra content">
              <Link
                to={"/"}
                className="ui purple button"
                onClick={() => {
                  try {
                    this.props.fetchCity(city.value);
                  } catch (e) {
                    ToastsStore.error("Failed to load data");
                  }
                }}
              >
                Details
              </Link>
              {/* <div
                  className="ui basic red button"
                  onClick={() => this.props.deleteFavorite(city.value)}
                >
                  Delete
                </div> */}
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    if (this.props.faveList.length > 0) {
      return (
        <div className="ui five column stackable grid">{this.renderList()}</div>
      );
    } else {
      return <h3>Favorites list is empty</h3>;
    }
  }
}
const mapStateToProps = state => {
  return { faveList: state.favorites };
};
export default connect(mapStateToProps, { deleteFavorite, fetchCity })(
  FaveCard
);
