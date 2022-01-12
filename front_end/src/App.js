import React, { useState } from 'react';
import { Router } from '@reach/router';

// views
import LoginRegistration from './views/LoginRegistration';
import Home from './views/Home';
import Profile from './views/Profile';
import User from './views/User';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [userID, setUserID] = useState("");

  return (
    <div className="App">
      <Router>
        <LoginRegistration path="/" userID={userID} setUserID={setUserID} />
        <Home path="/home" userID={userID} workouts={workouts} setWorkouts={setWorkouts} />
        <Profile path="/profile" workouts={workouts} setWorkouts={setWorkouts} />
        <User path="/user" workouts={workouts} />
      </Router>
    </div>
  );
}

export default App;
