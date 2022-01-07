import React, { useEffect, useState } from "react";
import axios from 'axios';

// components
import Nav from "../components/Nav";
import UserCard from "../components/UserCard";
import WorkoutFeed from "../components/WorkoutFeed";

const User = (props) => {
  const { workouts } = props;

  // set user state
  const [user, setUser] = useState({})

  // const user = {
  //   username: "Kai",
  //   about: "Lifelong swimmer mostly looking for workouts, occasionally writing one:p",
  //   workouts: "2"
  // }

  useEffect( () => {
    axios.get('http://localhost:4999/test/user')
      .then(response => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

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