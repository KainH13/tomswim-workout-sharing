import React from "react";

const Registration = (props) => {

  // validation functions
  const usernameValidation = (username) => {
    if (username.trim() === '') {
      return 'username is required'
    }
    if (/[^a-zA-Z -]/.test(username)) {
      return 'Invalid Characters';
    }
    if (username.trim().length < 3) {
      return 'username needs to be at least 3 characters';
    }
    return null;
  };

  const emailValidation = email => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return null;
    }
    if (email.trim() === '') {
      return 'Email is required';
    }
    return 'Please enter a valid email';
  };

  const passwordValidation = password => {
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
      return null;
    }
    if (password.trim() ==='') {
      return 'Password is required';
    }
    return 'Password must be at least 8 characters and contain at least one number and special character'
  }

  const validate = {
    username: usernameValidation,
    email: emailValidation,
    password: passwordValidation
  }

  return (
    <div className="col card col-6">
      <h2 className="text-primary">Register</h2>
      <form action="/user/register" method="POST">
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="username">Username:</label>
          <input className="form-control" type="text" name="username" />
        </div>
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="email">Email:</label>
          <input className="form-control" type="email" name="email" />
        </div>
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="password">Password:</label>
          <input className="form-control" type="password" name="password" />
        </div>
        <div className="form-group d-flex flex-column mb-3">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            className="form-control"
            type="password"
            name="confirm_password"
          />
        </div>
        <input
          className="btn btn-outline-primary mb-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Registration;
