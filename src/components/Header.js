import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary purple pointing menu ">
      <div className="active header item left">Herolo Weather App</div>
      <Link to={"/"} className="active item">
        Home
      </Link>
      <Link to={"/favorites"} className="item">
        Favorites
      </Link>
    </div>
  );
};

export default Header;
