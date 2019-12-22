import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    pageFlag: false
  };
  render() {
    return (
      <div className="ui secondary purple pointing menu ">
        <div className="active header item left">Herolo Weather App</div>
        <Link
          to={"/"}
          className={`item ${this.state.pageFlag ? "" : "active"}`}
          onClick={() => this.setState({ pageFlag: !this.state.pageFlag })}
        >
          Home
        </Link>
        <Link
          onClick={() => this.setState({ pageFlag: !this.state.pageFlag })}
          to={"/favorites"}
          className={`item ${this.state.pageFlag ? "active" : ""}`}
        >
          Favorites
        </Link>
      </div>
    );
  }
}

export default Header;
