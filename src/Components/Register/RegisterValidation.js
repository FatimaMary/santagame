import React from 'react';


function RegisterValidation({registerData}) {
    let errors = {};

    if (!registerData.name) {
      errors.name = "Name is required";
    }
    //   else if (!/^[a-zA-Z]+$/.test(registerData.name)) {
    //     errors.name = "Name is invalid";
    //   }
  
    if (!registerData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      errors.email = "Email is invalid";
    }
  
    if (!registerData.password) {
      errors.password = "Password is required";
    } else if (registerData.password.length < 5) {
      errors.password = "Password must be more than 5 character";
    }
    return errors;
}

export default RegisterValidation