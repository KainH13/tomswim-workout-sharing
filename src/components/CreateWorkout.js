import React, { useState } from "react";

const CreateWorkout = (props) => {
  const { workouts, setWorkouts } = props;

  // set up form attributes
  const [title, setTitle] = useState("");
  const [coach, setCoach] = useState("");
  const [workout, setWorkout] = useState("");

  // handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    setWorkouts([
      ...workouts,
      {
        title: title,
        coach: coach,
        body: workout,
        likes: "0",
      },
    ]);

    // clear form fields for a new entry
    setTitle("");
    setCoach("");
    setWorkout("");
  };

  return (
    <div>
      <h1 className="text-center">Add a Workout</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coach" className="form-label">
            Coach:
          </label>
          <input
            type="text"
            className="form-control"
            id="coach"
            value={coach}
            onChange={(e) => {
              setCoach(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="workout" className="form-label">
            Workout:
          </label>
          <textarea
            className="form-control"
            style={{whiteSpace: "pre-wrap"}}
            name="workout"
            id="workout"
            cols="30"
            rows="10"
            wrap="hard"
            value={workout}
            onChange={(e) => {
              setWorkout(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateWorkout;
