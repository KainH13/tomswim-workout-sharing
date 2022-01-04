import React from "react";
import Nav from "../components/Nav";
import CreateWorkout from "../components/CreateWorkout";
import WorkoutFeed from "../components/WorkoutFeed";


const Home = (props) => {
  return (
    <div className="container">
      <Nav page="home" />
      <div className="container">
        <div className="row">
          <div className="col">
            <WorkoutFeed />
          </div>
          <div className="col">
            <CreateWorkout />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;