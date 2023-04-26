// import React from "react";

function MainValidation(names) {
  // let errors = {};

  const data = [...names];

  let valid = true;
  for (let index = 0; index < data.length; index++) {
    if (data[index].name === "") {
      data[index].nameCheck = "name required";
      data[index].nameLengthCheck = "";
      valid = true;
    }
    // } else if (data[index].name.length < 3) {
    //   data[index].nameLengthCheck = "name should be greater than 3";
    //   data[index].nameCheck = "";
    //   valid = false;
    // } else {
    //   data[index].nameCheck = "";
    //   data[index].nameLengthCheck = "";
    //   valid = true;
    // }

    // setNames(data);
    return valid;
  }
}
export default MainValidation;
