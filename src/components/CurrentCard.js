import React from "react";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../actions";

class CurrentCard extends React.Component {
  //check if the current city is already in favorites
  checkCity() {
    let { favorList, curCity } = this.props;
    let filterd = favorList.filter(city => city === curCity);
    console.log(filterd);
    return filterd.length <= 0;
  }
  //conditional rendring whether add or remove to favorites
  addOrDelete = () => {
    let { addFavorite, deleteFavorite, curCity } = this.props;
    if (this.checkCity()) {
      return (
        <div className="right floated column">
          <span className="right floated" onClick={() => addFavorite(curCity)}>
            <i className="big heart outline  icon"></i>
            Add To Favorites
          </span>
        </div>
      );
    } else {
      return (
        <div className="right floated column">
          <span
            className="right floated"
            onClick={() => deleteFavorite(curCity)}
          >
            <i className="big heart  icon"></i>
            Remove From Favorites
          </span>
        </div>
      );
    }
  };

  render() {
    let { imgSrc, header, temp, desc } = this.props;
    return (
      <div className=" column row">
        <div className="column">
          <img className="ui image small" src={imgSrc} alt="icon" />
        </div>
        <div className="column">
          <h1 className="header">{header}</h1>
          <h3>{`${temp} C°, 
            ${desc}`}</h3>
        </div>
        {this.addOrDelete()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { favorList: state.favorites, curCity: state.forecast.value };
};

export default connect(mapStateToProps, { addFavorite, deleteFavorite })(
  CurrentCard
);
