import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import { searchCity } from "../api/config";
import { compose } from "redux";
class SearchBar extends Component {
  state = { term: "" };

  setValues = name => {
    let obj = {};
    obj.label = name.LocalizedName;
    obj.value = name.LocalizedName;
    obj.key = name.Key;
    return obj;
  };
  promiseSearch = async inputValue => {
    let res = await searchCity(inputValue);
    return res.data.map(city => this.setValues(city));
  };

  render() {
    return (
      <AsyncSelect
        placeholder="Search cityy"
        onChange={val => console.log(val)}
        cacheOptions
        defaultOptions
        loadOptions={this.promiseSearch}
      />
    );
  }
}

export default SearchBar;
