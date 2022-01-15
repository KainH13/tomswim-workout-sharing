import React, { useState } from "react";
import Nav from "../components/Nav";
import CreateWorkout from "../components/CreateWorkout";
import WorkoutFeed from "../components/WorkoutFeed";
import ProfileCard from "../components/ProfileCard";

const Profile = (props) => {
    const { workouts, setWorkouts } = props;

    const [user, setUser] = useState({
        username: "TomSwim",
        about: "Lifelong swimmer who loves coaching and sharing workouts!",
        workouts: "500",
    });

    return (
        <div className="container">
            <Nav page="profile" />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ProfileCard user={user} setUser={setUser} />
                        <CreateWorkout
                            workouts={workouts}
                            setWorkouts={setWorkouts}
                        />
                    </div>
                    <div className="col">
                        <WorkoutFeed workouts={workouts} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
