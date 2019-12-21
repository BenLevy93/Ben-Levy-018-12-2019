import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SearchBar from "./SearchBar";
import FaveCard from "./Favorites/FaveCard";
import { fetchCity } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchCity({ label: "Tel Aviv", key: "215854" });
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
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchCity })(App);
