const validation = (loginData) => {
    let errors = {};
  
    if (!loginData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      errors.email = "Email is invalid";
    }
  
    if (!loginData.password) {
      errors.password = "Password is required";
    } else if (loginData.password.length < 5) {
      errors.password = "Password must be more than 5 character";
    }
    return errors;
  };
  export default validation;