import React from "react";

const Header = () => {
  return (
    <div className="ui secondary purple pointing menu ">
      <div className="active header item left">Herolo Weather App</div>
      <a href="/" className="active item">
        Home
      </a>
      <a href="/" className="item">
        Favorites
      </a>
    </div>
  );
};

export default Header;
