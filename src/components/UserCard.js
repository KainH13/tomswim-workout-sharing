import React, { useState } from "react";

const UserCard = (props) => {
  const { user } = props;

  return (
    <div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">{user.username}</h2>
              <p class="card-text">
                {user.about}
              </p>
              <button className="btn btn-primary my-1">Follow</button>
              <p class="card-text">
                <small class="text-muted">Workouts: {user.workouts}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
