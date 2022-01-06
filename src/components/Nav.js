import React from "react";
import { Link } from "@reach/router";

const Nav = (props) => {
  const { page } = props;

  if (page === "home") {
    return (
      <div className="row align-items-top justify-content-between">
        <h1 className="navbar-brand col-4 m-2">TomSwim</h1>
        <div className="nav col-4 d-flex justify-content-end">
          <Link className="nav-link disabled m-2" to="/home">
            Home
          </Link>
          <Link className="nav-link m-2" to="/profile">
            Profile
          </Link>
          <Link className="nav-link m-2" to="/#">
            Logout
          </Link>
        </div>
      </div>
    );
  }

  if (page === "profile") {
    return (
      <div className="row align-items-top justify-content-between">
        <h1 className="navbar-brand col-4 m-2">TomSwim</h1>
        <div className="nav col-4 d-flex justify-content-end">
          <Link className="nav-link m-2" to="/home">
            Home
          </Link>
          <Link className="nav-link disabled m-2" to="/profile">
            Profile
          </Link>
          <Link className="nav-link m-2" to="/#">
            Logout
          </Link>
        </div>
      </div>
    );
  }
  
  if (page === "user") {
    return (
      <div className="row align-items-top justify-content-between">
        <h1 className="navbar-brand col-4 m-2">TomSwim</h1>
        <div className="nav col-4 d-flex justify-content-end">
          <Link className="nav-link m-2" to="/home">
            Home
          </Link>
          <Link className="nav-link m-2" to="/profile">
            Profile
          </Link>
          <Link className="nav-link m-2" to="/#">
            Logout
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="row align-items-top justify-content-between">
      <h1 className="navbar-brand col-4 m-2">TomSwim</h1>
      <div className="nav col-4 d-flex justify-content-end">
        <Link className="nav-link disabled m-2" to="/home">
          Home
        </Link>
        <Link className="nav-link m-2" to="/profile">
          Profile
        </Link>
        <Link className="nav-link m-2" to="/#">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Nav;
