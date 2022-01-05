import React from "react";

const WorkoutFeed = (props) => {
  const { workouts } = props

  // const testWorkouts = [
  //   {
  //     title: "Test Workout 1",
  //     coach: "TomSwim",
  //     body: `test
  //     test
  //     test x 100 on 1:30
  //     test x 200 @ base pace
  //     test warm down`,
  //     likes: "15",
  //   },
  //   {
  //     title: "Test Workout 2",
  //     coach: "Kai",
  //     body: `test
  //     test
  //     test x 100 on 1:30
  //     test x 200 @ base pace
  //     test warm down
      
      
      
  //     long workout`,
  //     likes: "5",
  //   },
  //   {
  //     title: "Test Workout 3",
  //     coach: "TomSwim",
  //     body: `test
  //     test
  //     test x 100 on 1:30
  //     test x 200 @ base pace
  //     test warm down
      
      
      
      
      
      
      
  //     really long workout`,
  //     likes: "20",
  //   },
  // ];

  return (
    <div>
      <h1 className="text-center">Workout Feed</h1>
      <div style={{height:"800px", overflow: "auto"}}>
        {workouts.map((workout, index) => (
          <div key={index}>
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">{workout.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{workout.coach}</h6>
                <p style={{whiteSpace: "pre-wrap"}} className="card-text">{workout.body}</p>
                <div className="w-25 row">
                  <div className="col">
                    <p className="text-end">{workout.likes}</p>
                  </div>
                  <div className="col">
                    <a href="/#" className="card-link">
                      like
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutFeed;
