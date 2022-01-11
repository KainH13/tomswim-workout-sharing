import React from "react";

// components
import Registration from "../components/Registration";
import Login from "../components/Login";

const LoginRegistration = (props) => {
  return (
    <div className="container">
      <div className="navbar d-flex justify-content-start align-items-start">
          <h1>TomSwim</h1>
          <h4 className="m-3">Swim Workout Sharing</h4>
      </div>
      <div className="row">
        <Registration />
        <Login />
      </div>
    </div>
  )
}

export default LoginRegistration;