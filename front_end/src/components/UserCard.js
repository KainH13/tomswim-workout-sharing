import React, { useState } from "react";

const UserCard = (props) => {
    const { user } = props;

    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="..."
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{user.username}</h2>
                            <p className="card-text">{user.about}</p>
                            <button className="btn btn-primary my-1">
                                Follow
                            </button>
                            <p className="card-text">
                                <small className="text-muted">
                                    Workouts: {user.workouts}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
