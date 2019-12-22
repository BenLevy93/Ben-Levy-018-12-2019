import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import { searchCity } from "../api/config";
import { connect } from "react-redux";
import { fetchCity } from "../actions";
import { ToastsStore } from "react-toasts";
import validator from "validator";
class SearchBar extends Component {
  state = { term: "" };

  setFormat = city => {
    let obj = {};
    obj.label = city.LocalizedName;
    obj.key = city.Key;
    return obj;
  };
  getOptions = async inputValue => {
    if (inputValue !== "") {
      if (!this.cityNameValidation(inputValue)) {
        return ToastsStore.warning("Search by english letters only");
      }
      try {
        let res = await searchCity(inputValue);
        return res.data.map(city => this.setFormat(city));
      } catch (e) {
        ToastsStore.error("Failed to make a search , ", e);
      }
    }
  };
  cityNameValidation = cityName => {
    const words = cityName.split(" ");
    return words.every(w => validator.isAlpha(w) || w === " ");
  };
  handleChange = selectedValue => {
    this.setState({ term: selectedValue });
    this.props.fetchCity(selectedValue);
    ToastsStore.success("New city come up");
    this.setState({ term: "" });
  };

  render() {
    return (
      <AsyncSelect
        value={this.state.term}
        placeholder="Search city"
        onChange={this.handleChange}
        cacheOptions
        defaultOptions
        loadOptions={this.getOptions}
      />
    );
  }
}

export default connect(null, { fetchCity })(SearchBar);
