export const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "50%",
    marginLeft: "25%",
    background: "lightgrey",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: "purple",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "blue" : "purple"
    }
  }),
  menu: base => ({
    ...base,
    width: "50%",
    marginLeft: "25%",
    justifyContent: "center",
    background: "lightgrey",
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  })
};
