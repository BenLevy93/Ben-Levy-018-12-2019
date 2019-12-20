import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SearchBar from "./SearchBar";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
