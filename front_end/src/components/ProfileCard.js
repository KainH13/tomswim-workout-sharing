import React, { useState } from "react";

const ProfileCard = (props) => {
  const { user, setUser } = props;

  // state for edit functionality
  const [editing, setEditing] = useState(false);

  // state for profile attributes
  const [username, setUsername] = useState(user.username);
  const [about, setAbout] = useState(user.about);

  // save edits
  const submitHandler = (e) => {
    e.preventDefault();

    setUser({
      username: username,
      about: about,
      workouts: user.workouts,
    });

    setEditing(false);
  };

  // displaying the correct view based on editing status
  if (editing) {
    return (
      <form onSubmit={submitHandler} className="form card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder={user.username}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating">
                <textarea
                  type="text"
                  className="form-control"
                  style={{ whiteSpace: "pre-wrap" }}
                  wrap="hard"
                  id="about"
                  cols="30"
                  rows="5"
                  placeholder={user.about}
                  value={about}
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                />
                <label htmlFor="about">About</label>
              </div>
              <p className="card-text">
                <small className="text-muted">Workouts: {user.workouts}</small>
              </p>
              <button className="btn btn-outline-primary">Save</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
  if (!editing) {
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{user.username}</h2>
              <p className="card-text" style={{whiteSpace: "pre-wrap"}}>{user.about}</p>
              <p className="card-text">
                <small className="text-muted">Workouts: {user.workouts}</small>
              </p>
              <button
                className="btn btn-outline-primary"
                onClick={() => setEditing(!editing)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileCard;
