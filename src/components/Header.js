import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeTheme } from "../actions";

class Header extends React.Component {
  state = {
    mode: false
  };
  // handelTheme = theme => {
  //   if (!theme) {
  //     this.props.changeTheme(true);
  //   } else {
  //     this.props.changeTheme(false);
  //   }
  // };

  render() {
    return (
      <div className="ui secondary pointing purple menu ">
        <div className="active header item left">Herolo App</div>

        <Link
          onClick={() => this.setState({ favePage: false })}
          to={"/"}
          className={`item ${this.state.favePage ? "" : ""}`}
        >
          Home
        </Link>
        <Link
          onClick={() => this.setState({ favePage: true })}
          to={"/favorites"}
          className={`item ${this.state.favePage ? "" : ""}`}
        >
          Favorites
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="ui toggle checkbox"
            onClick={() => this.props.changeTheme(!this.props.darkMode)}
          >
            <input type="checkbox" name="newsletter" />
            <label>
              <i className="moon icon"></i>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { darkMode: state.darkMode };
};
export default connect(mapStateToProps, { changeTheme })(Header);
