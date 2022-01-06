import React from "react";

import Nav from "../components/Nav";
import UserCard from "../components/UserCard";
import WorkoutFeed from "../components/WorkoutFeed";

const User = (props) => {
  const { workouts } = props;

  const user = {
    username: "Kai",
    about: "Lifelong swimmer mostly looking for workouts, occasionally writing one:p",
    workouts: "2"
  }

  return (
    <div className="container">
      <Nav page="user" />
      <div className="container">
        <div className="row">
          <div className="col">
            <UserCard user={user} />
          </div>
          <div className="col">
            <WorkoutFeed workouts={workouts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;