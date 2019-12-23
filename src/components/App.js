import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./HomePage/Home";
import SearchBar from "./SearchBar";
import FaveCard from "./Favorites/FaveCard";
import { fetchCity } from "../actions";
import { connect } from "react-redux";
import { getCityByCords } from "../api/config";
import { ToastsContainer, ToastsStore } from "react-toasts";

class App extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.geoLocationSuccess,
      this.geoLocationFail.bind(this)
    );
  }
  geoLocationSuccess = async location => {
    try {
      let lat = location.coords.latitude;
      let long = location.coords.longitude;
      let res = await getCityByCords(lat, long);
      let { LocalizedName, Key } = res.data;
      this.props.fetchCity({ label: LocalizedName, key: Key });
    } catch (e) {
      return ToastsStore.error(`Failed to load data: ${e}`);
    }
  };
  geoLocationFail() {
    //set default city
    try {
      this.props.fetchCity({ label: "Tel Aviv", key: "215854" });
    } catch (e) {
      ToastsStore.error(`Failed to load data: ${e}`);
    }
  }
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={FaveCard} />
            <ToastsContainer store={ToastsStore} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchCity })(App);
