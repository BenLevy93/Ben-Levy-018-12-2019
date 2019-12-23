import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeTheme } from "../actions";

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing purple menu ">
        <div className="active header item left">Herolo App</div>

        <Link to={"/"} className="item">
          Home
        </Link>
        <Link to={"/favorites"} className="item">
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
