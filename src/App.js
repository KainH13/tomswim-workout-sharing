import React from 'react';
import { Router } from '@reach/router';

// views
import LoginRegistration from './views/LoginRegistration';
import Home from './views/Home';
import Profile from './views/Profile';
import User from './views/User';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <LoginRegistration path="/login" />
        <Home path="/home" />
        <Profile path="/profile" />
        <User path="/user" />
      </Router>
    </div>
  );
}

export default App;
