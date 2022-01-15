import { Redirect } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Registration = (props) => {
    const { userID, setUserID } = props;

    // useEffect to re-route user to homepage if already logged in

    // form attributes
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // validation functions
    // const usernameValidation = (username) => {
    //   if (username.trim() === '') {
    //     return 'username is required'
    //   }
    //   if (/[^a-zA-Z -]/.test(username)) {
    //     return 'Invalid Characters';
    //   }
    //   if (username.trim().length < 3) {
    //     return 'username needs to be at least 3 characters';
    //   }
    //   return null;
    // };

    // const emailValidation = email => {
    //   if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    //     return null;
    //   }
    //   if (email.trim() === '') {
    //     return 'Email is required';
    //   }
    //   return 'Please enter a valid email';
    // };

    // const passwordValidation = password => {
    //   if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
    //     return null;
    //   }
    //   if (password.trim() ==='') {
    //     return 'Password is required';
    //   }
    //   return 'Password must be at least 8 characters and contain at least one number and special character'
    // }

    // const validate = {
    //   username: usernameValidation,
    //   email: emailValidation,
    //   password: passwordValidation
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        // send data to API
        axios
            .post("http://localhost:4999/api/user/register", {
                username: username,
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                setUserID(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (userID) {
        return <Redirect to="/home" />;
    } else {
        return (
            <div className="col card col-6">
                <h2 className="text-primary">Register</h2>
                <form onSubmit={submitHandler}>
                    <div className="form-group d-flex flex-column mb-3">
                        <label htmlFor="username">Username:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group d-flex flex-column mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group d-flex flex-column mb-3">
                        <label htmlFor="password">Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group d-flex flex-column mb-3">
                        <label htmlFor="confirm_password">
                            Confirm Password:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
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
    }
};

export default Registration;
