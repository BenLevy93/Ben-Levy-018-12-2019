import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import { searchCity } from "../api/config";
import { connect } from "react-redux";
import { fetchCity } from "../actions";
class SearchBar extends Component {
  state = { term: "" };

  setFormat = city => {
    let obj = {};
    obj.label = city.LocalizedName;
    obj.value = city.LocalizedName;
    obj.key = city.Key;
    return obj;
  };
  promiseSearch = async inputValue => {
    let res = await searchCity(inputValue);
    return res.data.map(city => this.setFormat(city));
  };

  render() {
    return (
      <AsyncSelect
        placeholder="Search city"
        onChange={val => fetchCity(val.key)}
        cacheOptions
        defaultOptions
        loadOptions={this.promiseSearch}
      />
    );
  }
}

export default connect(null)(SearchBar);
