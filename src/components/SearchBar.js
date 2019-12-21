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
  getOptions = async inputValue => {
    let res = await searchCity(inputValue);
    return res.data.map(city => this.setFormat(city));
  };
  handleChange = selectedValue => {
    this.setState({ term: selectedValue });
    this.props.fetchCity(selectedValue);
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
