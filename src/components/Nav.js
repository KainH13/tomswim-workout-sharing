import React from "react";

const Nav = (props) => {
  const {page} = props;

  if (page === "home") {
    return (
      <div className="row align-items-top justify-content-between">
      <h1 className="navbar-brand col-4">TomSwim</h1>
      <div className="nav col-4 d-flex justify-content-end">
        <a className="nav-link disabled m-2" href="/home">
          Home
        </a>
        <a className="nav-link m-2" href="/profile">
          Profile
        </a>
        <a className="nav-link m-2" href="/#">
          Logout
        </a>
      </div>
    </div>
    )
  }

  if (page === "profile") {
    return (
      <div className="row align-items-top justify-content-between">
      <h1 className="navbar-brand col-4">TomSwim</h1>
      <div className="nav col-4 d-flex justify-content-end">
        <a className="nav-link m-2" href="/home">
          Home
        </a>
        <a className="nav-link disabled m-2" href="/profile">
          Profile
        </a>
        <a className="nav-link m-2" href="/#">
          Logout
        </a>
      </div>
    </div>
    )
  }
  
  return (
    <div className="row align-items-top justify-content-between">
      <h1 className="navbar-brand col-4">TomSwim</h1>
      <div className="nav col-4 d-flex justify-content-end">
        <a className="nav-link m-2" href="/home">
          Home
        </a>
        <a className="nav-link m-2" href="/user">
          Profile
        </a>
        <a className="nav-link m-2" href="/#">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Nav;
