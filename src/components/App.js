import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import SearchBar from "./SearchBar";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
        <SearchBar />
        <Home />
      </div>
    );
  }
}

export default App;
