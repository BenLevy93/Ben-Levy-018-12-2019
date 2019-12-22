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
        ToastsStore.error("Failed to make a search: ", e);
      }
    }
  };
  cityNameValidation = cityName => {
    const words = cityName.split(" ");
    return words.every(w => validator.isAlpha(w) || w === " ");
  };
  handleChange = selectedValue => {
    try {
      this.setState({ term: selectedValue });
      this.props.fetchCity(selectedValue);
      this.setState({ term: "" });
    } catch (e) {
      ToastsStore.error("Failed to load data,Please try agian later :)");
    }
  };
  customStyles = {
    control: (base, state) => ({
      ...base,
      width: "50%",
      background: "lightblue",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "blue" : "purple",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "blue" : "purple"
      }
    }),
    menu: base => ({
      ...base,
      width: "50%",
      flex: 1,
      justifyContent: "center",
      background: "lightblue",
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    })
  };
  render() {
    return (
      <AsyncSelect
        styles={this.customStyles}
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
