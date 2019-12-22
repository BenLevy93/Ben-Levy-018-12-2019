import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    favePage: false
  };
  render() {
    return (
      <div className="ui secondary purple pointing menu ">
        <div className="active header item left">Herolo Weather App</div>
        <Link
          onClick={() => this.setState({ favePage: false })}
          to={"/"}
          className={`item ${this.state.favePage ? "" : "active"}`}
        >
          Home
        </Link>
        <Link
          onClick={() => this.setState({ favePage: true })}
          to={"/favorites"}
          className={`item ${this.state.favePage ? "active" : ""}`}
        >
          Favorites
        </Link>
      </div>
    );
  }
}

export default Header;
